import Link from "next/link";
import { NavBar } from "../..";
import { PriBtn } from "../../components/button";
import { useState } from "react";

export default function Products() {
  const [show, setShow] = useState<boolean>(true);
  return (
    <>
      <NavBar></NavBar>
      <div className="flex">
        <div className="mx-4 w-1/4">
          <PriBtn long={true} className="w-full" onClick={() => setShow(!show)}>
            Tìm kiếm
          </PriBtn>
          <ul className={`${show ? "" : "hidden"} my-4`}>
            <li>
              <select className="w-full border-b border-blue-500 focus-visible:outline-none">
                <option value="storage">Trong kho</option>
                <option value="list">Danh mục</option>
              </select>
            </li>
            <li className="mt-4 flex gap-1">
              <input
                type="text"
                className="w-3/5 border-b border-blue-500 focus-visible:outline-none"
                placeholder="Theo từ khóa"
              />
              <input
                type="text"
                className="w-2/5 border-b border-blue-500 focus-visible:outline-none"
                placeholder="Mã loại hàng"
              />
            </li>
            <li className="mt-4">
              <select className="w-full border-b border-blue-500 focus-visible:outline-none">
                <option value="all">Tất cả nhóm thuốc</option>
                <option value="cosmetic">Mỹ Phẩm</option>
                <option value="otc">Thuốc không kê đơn</option>
                <option value="describe">Thuốc kê đơn</option>
              </select>
            </li>
            <li className="mt-4">
              <select className="w-full border-b border-blue-500 focus-visible:outline-none">
                <option value="all">Tất cả nhà phân phối</option>
                {/* fetch data nha phan phoi */}
              </select>
            </li>
          </ul>
        </div>
        <div className="w-3/4">
          <div className="mx-4 flex flex-row-reverse gap-1">
            <Link href="/lists/products/addNew">
              <PriBtn> Thêm mới</PriBtn>
            </Link>
            <Link href="/lists/products/addNew">
              <PriBtn> Import</PriBtn>
            </Link>
            <Link href="/lists/products/addNew">
              <PriBtn> Excel</PriBtn>
            </Link>
          </div>
          <div>table</div>
        </div>
      </div>
    </>
  );
}
