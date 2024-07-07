// package chakram.controller;

// import org.slf4j.Logger;
// import org.slf4j.LoggerFactory;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.validation.annotation.Validated;
// import org.springframework.web.bind.annotation.*;
// import org.springframework.web.server.ResponseStatusException;
// import chakram.dto.ProductDTO;
// import chakram.dto.ProductListItemDTO;
// import chakram.model.ProductsEntity;
// import chakram.model.products.*;
// import chakram.services.ProductService;

// import java.util.Base64;
// import java.util.List;
// import java.util.stream.Collectors;

// @RestController
// @RequestMapping("/api/products")
// @Validated
// @CrossOrigin(origins = "http://localhost:3000")
// public class ProductController {

//     private static final Logger logger = LoggerFactory.getLogger(ProductController.class);

//     private final ProductService productService;

//     public ProductController(ProductService productService) {
//         this.productService = productService;
//     }

//     @PostMapping
//     public ResponseEntity<ProductsEntity> createProduct(@Validated @RequestBody ProductDTO productDTO) {
//         try {
//             ProductsEntity product = convertToEntity(productDTO);
            
//             logger.info("Attempting to save product: {}", product);
//             ProductsEntity savedProduct = productService.saveProduct(product);
//             logger.info("Product saved successfully: {}", savedProduct);
     
//             return new ResponseEntity<>(savedProduct, HttpStatus.CREATED);
//         } catch (Exception e) {
//             logger.error("Error creating product: {}", productDTO, e);
//             throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Error creating product", e);
//         }
//     }

//     private ProductsEntity convertToEntity(ProductDTO productDTO) {
//         ProductsEntity product = new ProductsEntity();
//         product.setProductId(productDTO.getProductId());
//         product.setProductName(productDTO.getProductName());
//         product.setPurity(productDTO.getPurity());

//         try {
//             String base64Image = productDTO.getImage().split(",")[1]; // Remove the data:image/...;base64, prefix if present
//             byte[] decodedBytes = Base64.getDecoder().decode(base64Image);
//             product.setImage(decodedBytes);
//         } catch (IllegalArgumentException e) {
//             System.err.println("Error decoding base64 image: " + e.getMessage());
//             throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid base64 image data", e);
//         }
//         product.setStartDescription(productDTO.getStartDescription());
//         product.setCasNumber(productDTO.getCasNumber());
//         product.setMolecularWeight(productDTO.getMolecularWeight());
//         product.setEmpiricalFormula(productDTO.getEmpiricalFormula());
//         product.setEcNumber(productDTO.getEcNumber());
//         product.setMdlNumber(productDTO.getMdlNumber());
//         product.setCategory(productDTO.getCategory());
//         product.setSubCategory(productDTO.getSubCategory());
//         product.setStatus(true);
        
//         // Convert documents
//         List<Document> documents = productDTO.getDocuments().stream().map(docDTO -> {
//             Document document = new Document();
//             document.setDocumentName(docDTO.getDocumentName());
//             document.setFileContent(docDTO.getFileContent());
//             document.setProduct(product);
//             return document;
//         }).collect(Collectors.toList());
//         product.setDocuments(documents);
        
//      // Convert SKU DTOs to SKU entities
//         List<SKU> skus = productDTO.getSkus().stream().map(skuDTO -> {
//             SKU sku = new SKU();
//             sku.setSkuName(skuDTO.getSkuName());
//             sku.setPackSize(skuDTO.getPackSize() + " " + skuDTO.getPackSizeValue());
//             sku.setAvailableDate(skuDTO.getAvailableDate());
//             sku.setPriceInr(Double.valueOf(skuDTO.getPriceInr()));
//             sku.setPriceUsd(Double.valueOf(skuDTO.getPriceUsd()));
//             sku.setProduct(product);
//             return sku;
//         }).collect(Collectors.toList());

//         product.setSkus(skus);
        

//         // Convert general information
//         GeneralInformation generalInfo = new GeneralInformation();
//         generalInfo.setPhysicalState(productDTO.getGeneralInformation().getPhysicalState());
//         generalInfo.setPackagingContainer(productDTO.getGeneralInformation().getPackagingContainer());
//         generalInfo.setCasRn(productDTO.getGeneralInformation().getCasRn());
//         generalInfo.setPubchemId(productDTO.getGeneralInformation().getPubchemId());
//         generalInfo.setSdbsId(productDTO.getGeneralInformation().getSdbsId());
//         generalInfo.setMerckIndex(productDTO.getGeneralInformation().getMerckIndex());
//         generalInfo.setReaxysNumber(productDTO.getGeneralInformation().getReaxysNumber());
//         generalInfo.setProduct(product);
//         product.setGeneralInformation(generalInfo);
        
//      // Convert specification
//         Specification specification = new Specification();
       
//         specification.setPurityHplc(productDTO.getSpecification().getPurityHplc());
//         specification.setPurityTitration(productDTO.getSpecification().getPurityTitration());
//         specification.setMeltingPoint(productDTO.getSpecification().getMeltingPoint());
//         specification.setSolubilityWater(productDTO.getSpecification().getSolubilityWater());
//         specification.setSolubilityOther(productDTO.getSpecification().getSolubilityOther());
//         specification.setProduct(product);
//         product.setSpecification(specification);

//           // Convert applications
//           List<Application> applications = productDTO.getApplications().stream().map(appDTO -> {
//             Application application = new Application();
//             application.setApplicationName(appDTO.getApplicationName());
//             application.setFilePath(appDTO.getFilePath());
//             application.setAvailability(appDTO.isAvailability());
//             application.setProduct(product);
//             return application;
//         }).collect(Collectors.toList());
//         product.setApplications(applications);
        
        
//      // Convert safety regulation
//         SafetyRegulation safetyRegulation = new SafetyRegulation();
//         safetyRegulation.setGhsSignalWord(productDTO.getSafetyRegulation().getGhsSignalWord());
//         safetyRegulation.setHazardStatements(productDTO.getSafetyRegulation().getHazardStatements());
//         safetyRegulation.setPrecautionaryStatements(productDTO.getSafetyRegulation().getPrecautionaryStatements());
//         safetyRegulation.setRtecs(productDTO.getSafetyRegulation().getRtecs());
//         safetyRegulation.setProduct(product);
//         product.setSafetyRegulation(safetyRegulation);

//         return product;
//     }
//     @GetMapping("/{productId}")
//     public ResponseEntity<ProductsEntity> getProductById(@PathVariable String productId) {
//         try {
//             ProductsEntity product = productService.getProductById(productId);
//             if (product == null) {
//                 return ResponseEntity.notFound().build();
//             }
//             return ResponseEntity.ok(product);
//         } catch (Exception e) {
//             logger.error("Error retrieving product with ID: {}", productId, e);
//             throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Error retrieving product", e);
//         }
//     }

//     @DeleteMapping("/{productId}")
//     public ResponseEntity<Void> deleteProductById(@PathVariable String productId) {
//         try {
//             productService.deleteProductById(productId);
//             logger.info("Product with ID {} deleted successfully", productId);
//             return ResponseEntity.noContent().build();
//         } catch (Exception e) {
//             logger.error("Error deleting product with ID: {}", productId, e);
//             throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Error deleting product", e);
//         }
//     }

//     @GetMapping
//     public ResponseEntity<List<ProductsEntity>> getAllProducts() {
//         try {
//             List<ProductsEntity> products = productService.getAllProducts();
//             return ResponseEntity.ok(products);
//         } catch (Exception e) {
//             logger.error("Error retrieving all products", e);
//             throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Error retrieving all products", e);
//         }
//     }
    
//     @GetMapping("/list")
//     public ResponseEntity<List<ProductListItemDTO>> getProductList() {
//         try {
//             List<ProductsEntity> products = productService.getAllProducts();
            
//             // Map ProductsEntity to ProductListItemDTO
//             List<ProductListItemDTO> productList = products.stream()
//                     .map(this::convertToProductListItemDTO)
//                     .collect(Collectors.toList());

//             return ResponseEntity.ok(productList);
//         } catch (Exception e) {
//             throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Error retrieving product list", e);
//         }
//     }
    
//     private ProductListItemDTO convertToProductListItemDTO(ProductsEntity productEntity) {
//         return new ProductListItemDTO(
//                 productEntity.getId(),
//                 productEntity.getProductName(),
//                 productEntity.getCategory(),
//                 productEntity.getProductId(),
//                 productEntity.getCasNumber(),
//                 productEntity.getSkus().size(), // Assuming skus is a collection in ProductsEntity
//                 "Active" // Hardcoded status for demonstration
//         );
//     }

// }
