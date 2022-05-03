import React from 'react'

export default function CartColumns() {
    return (
      <div>
          <div className="container-fluid text-center d-none d-lg-block">
              <div className="row">
                  <div className="col-10 mx-auto col-lg-2">
                      <p className="p text-uppercase">products</p>
                  </div>
                  <div className="col-10 mx-auto col-lg-2">
                      <p className="p text-uppercase">product name</p>
                  </div>
                  <div className="col-10 mx-auto col-lg-2">
                      <p className="p text-uppercase">price</p>
                  </div>
                  <div className="col-10 mx-auto col-lg-2">
                      <p className="p text-uppercase">quantity</p>
                  </div>
                  <div className="col-10 mx-auto col-lg-2">
                      <p className="p text-uppercase">remove</p>
                  </div>
                  <div className="col-10 mx-auto col-lg-2">
                      <p className="p text-uppercase">total</p>
                  </div>
              </div>
          </div>
      </div>
    );
};
