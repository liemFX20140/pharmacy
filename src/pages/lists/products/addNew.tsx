import { FormEvent, useRef } from "react";
import { PriBtn } from "~/pages/components/button";

export default function AddNewProducts() {
  const addProductToList = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };

  return (
    <div className="container mx-auto rounded-md bg-white shadow-lg">
      <p className="font-3xl my-4 rounded-t-md bg-blue-500 px-4 py-2 font-bold text-white">
        Thêm hàng hóa
      </p>
      <div>
        <div className="space-x-1  border-b">
          <div>
            <div className="py-4">
              <form className="grid lg:grid-cols-2" onSubmit={addProductToList}>
                <label
                  htmlFor="sku"
                  className="my-2 flex justify-between px-1 "
                >
                  <span className=" font-semibold after:text-red-500 after:content-['_*_']">
                    Mã sản phẩm
                  </span>
                  <input
                    name="sku"
                    type="text"
                    className="mx-2 w-4/5 border-b border-slate-400 focus-visible:outline-none"
                    placeholder="Mã sản phẩm"
                  />
                </label>
                <label className="my-2 flex justify-between px-1 ">
                  <span className=" font-semibold after:text-red-500 after:content-['_*_']">
                    Đơn vị
                  </span>
                  <select
                    className="mx-2 w-4/5 border-b border-l-slate-500 focus-visible:outline-none"
                    defaultValue={""}
                  >
                    <option
                      value=""
                      // selected
                      hidden
                      disabled
                    >
                      Chọn đơn vị sản phẩm
                    </option>
                    <option value="pill">Viên</option>
                    <option value="pack">Bịch</option>
                    <option value="box">Hộp</option>
                  </select>
                </label>
                <label className="my-2 flex justify-between px-1 ">
                  <span className=" font-semibold after:text-red-500 after:content-['_*_']">
                    Tên sản phẩm
                  </span>
                  <input
                  name="productName"
                    type="text"
                    className="mx-2 w-4/5 justify-between border-b border-slate-400 focus-visible:outline-none"
                    placeholder="Tên sản phẩm"
                  />
                </label>
                <label className=" my-2 flex justify-between px-1">
                  <span className=" font-semibold after:text-red-500 after:content-['_*_']">
                    Nhóm hàng
                  </span>
                  <select
                    className="mx-2 w-4/5 border-b border-l-slate-500 focus-visible:outline-none"
                    defaultValue={""}
                  >
                    <option value="" disabled hidden>
                      Chọn nhóm sản phẩm
                    </option>
                    <option value="cosmetic">Mỹ phẩm</option>
                    <option value="otc">Thuốc không kê đơn</option>
                    <option value="describe">Thuốc kê đơn</option>
                  </select>
                </label>
                <label className="my-2 flex justify-between px-1 ">
                  <span className=" font-semibold after:text-red-500 after:content-['_*_']">
                    Số đăng ký
                  </span>
                  <input
                  name=""
                    type="text"
                    className="mx-2 w-4/5 justify-between border-b border-slate-400 focus-visible:outline-none"
                    placeholder="Số đăng ký"
                  />
                </label>
                <label className="my-2 flex justify-between px-1 ">
                  <span className=" font-semibold after:text-red-500 after:content-['_*_']">
                    Hạn sử dụng
                  </span>
                  <input
                    type="number"
                    className="mx-2 w-4/5 justify-between border-b border-slate-400 focus-visible:outline-none"
                    placeholder="tháng"
                  />
                </label>
                <label className="my-2 flex justify-between px-1 ">
                  <span className=" font-semibold">Hoạt chất</span>
                  <input
                    type="text"
                    className="mx-2 w-4/5 justify-between border-b border-slate-400 focus-visible:outline-none"
                    placeholder="Hoạt chất"
                  />
                </label>
                <label className="my-2 flex justify-between px-1 ">
                  <span className=" font-semibold ">Hàm lượng</span>
                  <input
                    type="text"
                    className="mx-2 w-4/5 justify-between border-b border-slate-400 focus-visible:outline-none"
                    placeholder="Hàm lượng"
                  />
                </label>
                <label className="my-2 flex justify-between px-1 ">
                  <span className=" font-semibold after:text-red-500 after:content-['_*_']">
                    Nhà sản xuất
                  </span>
                  <input
                    type="text"
                    className="mx-2 w-4/5 justify-between border-b border-slate-400 focus-visible:outline-none"
                    placeholder="Nhà sản xuất"
                  />
                </label>
                <label className="my-2 flex justify-between px-1 ">
                  <span className=" font-semibold after:text-red-500 after:content-['_*_']">
                    Nhà cung cấp
                  </span>
                  <input
                    type="text"
                    className="mx-2 w-4/5 justify-between border-b border-slate-400 focus-visible:outline-none"
                    placeholder="Nhà cung cấp"
                  />
                </label>
                <label className="my-2 flex justify-between px-1 ">
                  <span className=" font-semibold ">Ghi chú</span>
                  <textarea
                    className="mx-2 w-4/5 justify-between border-b border-slate-400 focus-visible:outline-none"
                    placeholder="Ghi chú"
                  />
                </label>
                <PriBtn className="ml-auto mr-4 mt-4 w-auto ">Thêm mới</PriBtn>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
