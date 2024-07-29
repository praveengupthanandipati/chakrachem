package chakram.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import chakram.dto.ApplicationDTO;
import chakram.dto.DocumentDTO;
import chakram.dto.GeneralInformationDTO;
import chakram.dto.ProductDTO;
import chakram.dto.ProductListItemDTO;
import chakram.dto.SKUDTO;
import chakram.dto.SafetyRegulationDTO;
import chakram.dto.SpecificationDTO;
import chakram.model.ProductsEntity;
import chakram.model.products.*;
import chakram.repo.SKURepository;
import chakram.services.ProductService;
import jakarta.persistence.EntityNotFoundException;

import java.util.Base64;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/products")
@Validated
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {

    private static final Logger logger = LoggerFactory.getLogger(ProductController.class);

    private final ProductService productService;
    @Autowired
    private SKURepository skuRepository;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping
    public ResponseEntity<ProductsEntity> createProduct(@Validated @RequestBody ProductDTO productDTO) {
        try {
            ProductsEntity product = convertToEntity(productDTO);
            
            logger.info("Attempting to save product: {}", product);
            ProductsEntity savedProduct = productService.saveProduct(product);
            logger.info("Product saved successfully: {}", savedProduct);

            return new ResponseEntity<>(savedProduct, HttpStatus.CREATED);
        } catch (Exception e) {
            logger.error("Error creating product: {}", productDTO, e);
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Error creating product", e);
        }
    }


	 private ProductsEntity convertToEntity(ProductDTO productDTO) {
	    ProductsEntity product = new ProductsEntity();
	    product.setProductId(productDTO.getProductId());
	    product.setProductName(productDTO.getProductName());
	    product.setImageName(productDTO.getProductName());
	    product.setPurity(productDTO.getPurity());
	
	    // Decode and set image
	    try {
	        String base64Image = productDTO.getImage().split(",")[1];
	        byte[] decodedBytes = Base64.getDecoder().decode(base64Image);
	        product.setImage(decodedBytes);
	    } catch (IllegalArgumentException e) {
	        System.err.println("Error decoding base64 image: " + e.getMessage());
	        throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid base64 image data", e);
	    }
	
	    // Other fields
	    product.setStartDescription(productDTO.getStartDescription());
	    product.setCasNumber(productDTO.getCasNumber());
	    product.setMolecularWeight(productDTO.getMolecularWeight());
	    product.setEmpiricalFormula(productDTO.getEmpiricalFormula());
	    product.setEcNumber(productDTO.getEcNumber());
	    product.setMdlNumber(productDTO.getMdlNumber());
	    product.setCategory(productDTO.getCategory());
	    product.setSubCategory(productDTO.getSubCategory());
	    product.setStatus(true);
	
	    // Convert Documents
	    List<Document> documents = productDTO.getDocuments().stream().map(docDTO -> {
	        Document document = new Document();
	        document.setDocumentName(docDTO.getDocumentName());
	        document.setFileType(docDTO.getFileType());
	        document.setFileName(docDTO.getFileName());
	        document.setFileContent(docDTO.getFileContent()); // Set base64 content directly
	        document.setProduct(product);
	        return document;
	    }).collect(Collectors.toList());
	    product.setDocuments(documents);
	
	    // Convert SKUs
	    List<SKU> skus = productDTO.getSkus().stream().map(skuDTO -> {
	        SKU sku = new SKU();
	        sku.setSkuName(skuDTO.getSkuName());
	        sku.setPackSize(skuDTO.getPackSize() + " " + skuDTO.getPackSizeValue());
	        sku.setAvailableDate(skuDTO.getAvailableDate());
	        sku.setPriceInr(Double.valueOf(skuDTO.getPriceInr()));
	        sku.setPriceUsd(Double.valueOf(skuDTO.getPriceUsd()));
	        sku.setProduct(product);
	        return sku;
	    }).collect(Collectors.toList());
	    product.setSkus(skus);
	
	    // Convert General Information
	    GeneralInformation generalInfo = new GeneralInformation();
	    generalInfo.setPhysicalState(productDTO.getGeneralInformation().getPhysicalState());
	    generalInfo.setPackagingContainer(productDTO.getGeneralInformation().getPackagingContainer());
	    generalInfo.setCasRn(productDTO.getGeneralInformation().getCasRn());
	    generalInfo.setPubchemId(productDTO.getGeneralInformation().getPubchemId());
	    generalInfo.setSdbsId(productDTO.getGeneralInformation().getSdbsId());
	    generalInfo.setMerckIndex(productDTO.getGeneralInformation().getMerckIndex());
	    generalInfo.setReaxysNumber(productDTO.getGeneralInformation().getReaxysNumber());
	    generalInfo.setProduct(product);
	    product.setGeneralInformation(generalInfo);
	
	    // Convert Specification
	    Specification specification = new Specification();
	    try {
	        String base64Image = productDTO.getSpecification().getImage().split(",")[1];
	        byte[] decodedBytes = Base64.getDecoder().decode(base64Image);
	        specification.setSpecificationImage(decodedBytes);
	    } catch (IllegalArgumentException e) {
	        System.err.println("Error decoding base64 image: " + e.getMessage());
	        throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid base64 image data", e);
	    }
	    specification.setPurityHplc(productDTO.getSpecification().getPurityHplc());
	    specification.setPurityTitration(productDTO.getSpecification().getPurityTitration());
	    specification.setMeltingPoint(productDTO.getSpecification().getMeltingPoint());
	    specification.setSolubilityWater(productDTO.getSpecification().getSolubilityWater());
	    specification.setSolubilityOther(productDTO.getSpecification().getSolubilityOther());
	    specification.setProduct(product);
	    product.setSpecification(specification);
	
	    // Convert Safety Regulation
	    SafetyRegulation safetyRegulation = new SafetyRegulation();
	    safetyRegulation.setGhsSignalWord(productDTO.getSafetyRegulation().getGhsSignalWord());
	    safetyRegulation.setHazardStatements(productDTO.getSafetyRegulation().getHazardStatements());
	    safetyRegulation.setPrecautionaryStatements(productDTO.getSafetyRegulation().getPrecautionaryStatements());
	    safetyRegulation.setRtecs(productDTO.getSafetyRegulation().getRtecs());
	    safetyRegulation.setProduct(product);
	    product.setSafetyRegulation(safetyRegulation);
	
	    // Convert Applications
	    List<Application> applications = productDTO.getApplications().stream().map(appDTO -> {
	        Application application = new Application();
//	        application.setApplicationType(appDTO.getApplicationType());
	        application.setProduct(product);
	        return application;
	    }).collect(Collectors.toList());
	    product.setApplications(applications);
	
	    return product;
	}

    
    @PutMapping("/{productId}")
    public ResponseEntity<ProductsEntity> updateProduct(@PathVariable Long productId, @Validated @RequestBody ProductDTO productDTO) {
        try {
            ProductsEntity updatedProduct = productService.updateProduct(productId, productDTO);
            return new ResponseEntity<>(updatedProduct, HttpStatus.OK);
        } catch (Exception e) {
            String errorMessage = "Error updating product with ID " + productId;
            logger.error(errorMessage, e);
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, errorMessage, e);
        }
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<ProductDTO> getProductById(@PathVariable Long id) {
        try {
            Optional<ProductsEntity> productOptional = productService.getById(id);
            
            if (productOptional.isPresent()) {
                ProductsEntity product = productOptional.get();
                ProductDTO productDTO = convertToDTO(product);
                return new ResponseEntity<>(productDTO, HttpStatus.OK);
            } else {
                logger.error("Product not found with id: {}", id);
                throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found");
            }
        } catch (Exception e) {
            logger.error("Error retrieving product with id: {}", id, e);
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Error retrieving product", e);
        }
    }

    private ProductDTO convertToDTO(ProductsEntity product) {
        ProductDTO productDTO = new ProductDTO();
        productDTO.setImageName(product.getImageName());
        productDTO.setProductId(product.getProductId());
        productDTO.setProductName(product.getProductName());
        productDTO.setPurity(product.getPurity());
        productDTO.setStartDescription(product.getStartDescription());
        productDTO.setCasNumber(product.getCasNumber());
        productDTO.setMolecularWeight(product.getMolecularWeight());
        productDTO.setEmpiricalFormula(product.getEmpiricalFormula());
        productDTO.setEcNumber(product.getEcNumber());
        productDTO.setMdlNumber(product.getMdlNumber());
        productDTO.setCategory(product.getCategory());
        productDTO.setSubCategory(product.getSubCategory());
        productDTO.setImage("data:image/jpeg;base64," + Base64.getEncoder().encodeToString(product.getImage()));

     // Convert documents
        List<DocumentDTO> documentDTOs = product.getDocuments().stream().map(doc -> {
            DocumentDTO docDTO = new DocumentDTO();
            docDTO.setDocumentName(doc.getDocumentName());
            docDTO.setId(doc.getId());
            docDTO.setFileContent(doc.getFileContent()); // Directly use base64 content
            return docDTO;
        }).collect(Collectors.toList());
        productDTO.setDocuments(documentDTOs);

        // Convert SKUs
        List<SKUDTO> skuDTOs = product.getSkus().stream().map(sku -> {
            SKUDTO skuDTO = new SKUDTO();
            skuDTO.setId(sku.getId());
            skuDTO.setSkuName(sku.getSkuName());
//            skuDTO.setPackSize(sku.getPackSize().split(" ")[0]);
            skuDTO.setPackSizeValue(sku.getPackSize().split(" ")[1]);
            skuDTO.setAvailableDate(sku.getAvailableDate());
            skuDTO.setPriceInr((sku.getPriceInr()));
            skuDTO.setPriceUsd((sku.getPriceUsd()));
            return skuDTO;
        }).collect(Collectors.toList());
        productDTO.setSkus(skuDTOs);

        // Convert general information
        GeneralInformation generalInfo = product.getGeneralInformation();
        GeneralInformationDTO generalInfoDTO = new GeneralInformationDTO();
        generalInfoDTO.setId(generalInfo.getId());
        generalInfoDTO.setPhysicalState(generalInfo.getPhysicalState());
        generalInfoDTO.setPackagingContainer(generalInfo.getPackagingContainer());
        generalInfoDTO.setCasRn(generalInfo.getCasRn());
        generalInfoDTO.setPubchemId(generalInfo.getPubchemId());
        generalInfoDTO.setSdbsId(generalInfo.getSdbsId());
        generalInfoDTO.setMerckIndex(generalInfo.getMerckIndex());
        generalInfoDTO.setReaxysNumber(generalInfo.getReaxysNumber());
        productDTO.setGeneralInformation(generalInfoDTO);

        // Convert specification
        Specification specification = product.getSpecification();
        SpecificationDTO specificationDTO = new SpecificationDTO();
        specificationDTO.setId(specification.getId());
        specificationDTO.setImage("data:image/png;base64," + Base64.getEncoder().encodeToString(specification.getSpecificationImage()));
        specificationDTO.setPurityHplc(specification.getPurityHplc());
        specificationDTO.setPurityTitration(specification.getPurityTitration());
        specificationDTO.setMeltingPoint(specification.getMeltingPoint());
        specificationDTO.setSolubilityWater(specification.getSolubilityWater());
        specificationDTO.setSolubilityOther(specification.getSolubilityOther());
        productDTO.setSpecification(specificationDTO);

        // Convert safety regulation
        SafetyRegulation safetyRegulation = product.getSafetyRegulation();
        SafetyRegulationDTO safetyRegulationDTO = new SafetyRegulationDTO();
        safetyRegulationDTO.setId(safetyRegulation.getId());
        safetyRegulationDTO.setGhsSignalWord(safetyRegulation.getGhsSignalWord());
        safetyRegulationDTO.setHazardStatements(safetyRegulation.getHazardStatements());
        safetyRegulationDTO.setPrecautionaryStatements(safetyRegulation.getPrecautionaryStatements());
        safetyRegulationDTO.setRtecs(safetyRegulation.getRtecs());
        productDTO.setSafetyRegulation(safetyRegulationDTO);

        // Convert applications
        List<ApplicationDTO> applicationDTOs = product.getApplications().stream().map(app -> {
            ApplicationDTO appDTO = new ApplicationDTO();
            appDTO.setApplicationName(app.getApplicationName());
            appDTO.setId(app.getId());
            appDTO.setFileContent(app.getFileContent());
            return appDTO;
        }).collect(Collectors.toList());
        productDTO.setApplications(applicationDTOs);

        return productDTO;
    }

    @DeleteMapping("/{productId}")
    public ResponseEntity<Map<String, String>> deleteProductById(@PathVariable Long productId) {
        Map<String, String> response = new HashMap<>();
        try {
            productService.deleteProductById(productId);
            logger.info("Product with ID {} deleted successfully", productId);
            response.put("message", "Product deleted successfully");
            return ResponseEntity.ok(response);
        } catch (EntityNotFoundException e) {
            logger.error("Product not found with ID: {}", productId, e);
            response.put("message", "Product not found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } catch (Exception e) {
            logger.error("Error deleting product with ID: {}", productId, e);
            response.put("message", "Error deleting product");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @GetMapping
    public ResponseEntity<List<ProductsEntity>> getAllProducts() {
        try {
            List<ProductsEntity> products = productService.getAllProducts();
            return ResponseEntity.ok(products);
        } catch (Exception e) {
            logger.error("Error retrieving all products", e);
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Error retrieving all products", e);
        }
    }
    
    @GetMapping("/list")
    public ResponseEntity<List<ProductListItemDTO>> getProductList() {
        try {
            List<ProductsEntity> products = productService.getAllProducts();
            List<ProductListItemDTO> productList = products.stream()
                    .map(product -> {
                        ProductListItemDTO dto = convertToProductListItemDTO(product);
                        // Fetch SKU count for each product
                        int skuCount = skuRepository.countByProductId(product.getId());
                        dto.setSku(skuCount);
                        return dto;
                    })
                    .collect(Collectors.toList());
            return ResponseEntity.ok(productList);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Error retrieving product list", e);
        }
    }

    private ProductListItemDTO convertToProductListItemDTO(ProductsEntity productEntity) {
        String base64Image = "";
        if (productEntity.getImage() != null) {
            base64Image = "data:image/jpeg;base64," + Base64.getEncoder().encodeToString(productEntity.getImage());
        }
        String packSizes = productEntity.getSkus().stream()
            .map(SKU::getPackSize)
            .collect(Collectors.joining(", "));

        // Concatenate all priceInr values
        String priceInrValues = productEntity.getSkus().stream()
            .map(sku -> sku.getPriceInr().toString())
            .collect(Collectors.joining(", "));
        return new ProductListItemDTO(
            productEntity.getId(),
            productEntity.getProductName(),
            productEntity.getCategory(),
            productEntity.getProductId(),
            productEntity.getCasNumber(),
            productEntity.getSkus().size(), // Assuming skus is a collection in ProductsEntity
            "Active",
            base64Image,
            packSizes,
            priceInrValues
        );
    }

    @GetMapping("/getProductListBySubCategory/{subCategory}")
    public ResponseEntity<List<ProductListItemDTO>> getProductListBySubCategory(@PathVariable String subCategory) {
        try {
            List<ProductsEntity> products = productService.getProductListBySubCategory(subCategory);

            List<ProductListItemDTO> productList = products.stream()
                    .map(product -> {
                        ProductListItemDTO dto = convertToProductListItemDTO(product);
                       
                        int skuCount = skuRepository.countByProductId(product.getId());
                        dto.setSku(skuCount);
                        return dto;
                    })
                    .collect(Collectors.toList());

            return ResponseEntity.ok(productList);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Error retrieving product list", e);
        }
    }
    
    @GetMapping("/searchProducts")
    public ResponseEntity<List<ProductListItemDTO>> searchProducts(@RequestParam String query) {
    	try {
            List<ProductsEntity> products = productService.searchProducts(query);

            List<ProductListItemDTO> productList = products.stream()
                    .map(product -> {
                        ProductListItemDTO dto = convertToProductListItemDTO(product);
                       
                        int skuCount = skuRepository.countByProductId(product.getId());
                        dto.setSku(skuCount);
                        return dto;
                    })
                    .collect(Collectors.toList());

            return ResponseEntity.ok(productList);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Error retrieving product list", e);
        }
    	
    }


   

}
