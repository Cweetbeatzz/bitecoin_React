import React from "react";

export default function UploadNft() {
  return (
    <div>
      <div>
        <br />
        <br />
        <div className="container">
          <div className="bg-gradient col-7 mx-auto">
            <h2 className="display-5 text-warning text-center p-5" id="hhhhh">
              {" "}
              <strong>UPLOAD NFT</strong>
            </h2>
          </div>
          <div className="col-6 m-3 mx-auto">
            <hr className="text-white" />
            <div className="text-center">
              <h6 className="text-white mx-4">Sell your nft in seconds...</h6>
            </div>
          </div>

          <hr className="text-white" />
          <br />

          <div className=" d-flex mx-auto m-1 ">
            <div className="col-8 m-2 mx-auto">
              <div className="card bg-light bg-opacity-25">
                <div className="card-body">
                  <div>
                    <h4 className="card-title text-center text-warning">
                      <strong>UPLOAD</strong>
                    </h4>
                    <hr className="text-white" />
                  </div>

                  <form asp-action="Register" method="post" autocomplete="off">
                    <div className="form-group">
                      <div className="text-center">
                        <label className="p-2 text-white">
                          <strong>Address</strong>
                        </label>
                        <input
                          className="form-control mb-1"
                          name="toaddress"
                          placeholder="0x58c1c4a07046d54c5abb31d115b99c22ddb88ee4"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="text-center">
                        <label className="p-2 text-white">
                          <strong>Amount(ETH)</strong>
                        </label>
                        <input
                          className="form-control mb-1"
                          name="amount"
                          placeholder="0.0"
                        />
                      </div>
                    </div>
                    <div class="form-group ">
                      <div className="text-center">
                        <label
                          asp-for="Image"
                          class="control-label p-2 text-white"
                        >
                          <strong>Choose File</strong>
                        </label>
                        <div class="custom-file">
                          <input
                            name="uploaded_file"
                            type="file"
                            class="form-control custom-file-input"
                            id="nftImage"
                          />
                        </div>
                        <span
                          asp-validation-for="Image"
                          class="text-danger"
                        ></span>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="text-center">
                        <label className="p-2 text-white">
                          <strong>Message</strong>
                        </label>
                        <textarea
                          className="form-control mb-1"
                          type={"text"}
                          name="message"
                          placeholder="Enter description"
                        />
                      </div>
                    </div>
                    <br />
                    <div className="text-center mb-3">
                      <button type="submit" className="btn btn-warning">
                        <strong>SUBMIT</strong>
                      </button>
                    </div>
                  </form>

                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
          <hr className="text-white" />
          <hr className="text-white" />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}
