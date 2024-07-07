import React from 'react';

const SKUs = ({ skus, onSkusChange }) => {
  const handleSkuChange = (index, key, value) => {
    const newSkus = [...skus];
    if (key === 'priceInr' || key === 'priceUsd') {
      newSkus[index][key] = parseFloat(value); // Convert value to float if necessary
    } else {
      newSkus[index][key] = value;
    }
    onSkusChange(newSkus);
  };
  

  const handleDeleteSku = (index) => {
    const newSkus = skus.filter((_, i) => i !== index);
    onSkusChange(newSkus);
  };

  const handleAddSku = () => {
    onSkusChange([...skus, { skuName: '', packSize: '', packSizeValue: '', availableDate: '', priceInr: '', priceUsd: '' }]);
  };

  return (
    <div className="card bg-white rounded shadow p-4 mt-4">
      <h5 className="pb-3 mb-4 border-bottom">SKUs</h5>
      <div className="row mb-3">
        <div className="col-md-2"><strong>SKU Name</strong></div>
        <div className="col-md-3"><strong>Pack Size</strong></div>
        <div className="col-md-2"><strong>Available Date</strong></div>
        <div className="col-md-2"><strong>Price INR</strong></div>
        <div className="col-md-2"><strong>Price USD</strong></div>
        <div className="col-md-1"><strong>Action</strong></div>
      </div>
      {skus.map((sku, index) => (
        <div key={index} className="mb-3">
          <div className="row">
            <div className="col-md-2">
              <input
                className="form-control"
                type="text"
                placeholder="SKU Name"
                value={sku.skuName}
                onChange={(e) => handleSkuChange(index, 'skuName', e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <div className="input-group">
                <select
                  className="form-select col-md-4"
                  value={sku.packSize}
                  onChange={(e) => handleSkuChange(index, 'packSize', e.target.value)}
                >
                  <option value="Grams">Grams</option>
                  <option value="Milliliters">Milliliters</option>
                  <option value="Kilograms">Kilograms</option>
                </select>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Pack Size Value"
                  value={sku.packSizeValue}
                  onChange={(e) => handleSkuChange(index, 'packSizeValue', e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-2">
              <input
                className="form-control"
                type="date"
                placeholder="Available Date"
                value={sku.availableDate}
                onChange={(e) => handleSkuChange(index, 'availableDate', e.target.value)}
              />
            </div>
            <div className="col-md-2">
              <input
                className="form-control"
                type="text"
                placeholder="Price INR"
                value={sku.priceInr}
                onChange={(e) => handleSkuChange(index, 'priceInr', e.target.value)}
              />
            </div>
            <div className="col-md-2">
              <input
                className="form-control"
                type="text"
                placeholder="Price USD"
                value={sku.priceUsd}
                onChange={(e) => handleSkuChange(index, 'priceUsd', e.target.value)}
              />
            </div>
            <div className="col-md-1">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleDeleteSku(index)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleAddSku}
      >
        Add SKU
      </button>
    </div>
  );
};

export default SKUs;
