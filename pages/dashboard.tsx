import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function App() {
  const router = useRouter();
  const [productInfo, setProductInfo] = useState([]);

  useEffect(() => {
    const fetchData = async()=>{
        try {
            const response = await fetch('/api/dashboard');
            if(response.ok){
              const productData = await response.json();
              if(productData){
                  setProductInfo(productData);
              }
            }
        } catch (error) {
            console.log("Internal Server Error");
        }
    }
    fetchData();
  }, []);
  console.log("Product info: ",productInfo)

  const deleteData = async(e)=>{
    console.log("Delete product id: ", e.target.id);
    const productId = parseInt(e.target.id, 10);
    try {
      const response = await fetch(`/api/product/${productId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({productId}),
      });
      if(response.ok){
        alert('Product has been deleted!');
        router.reload();
      }
    } catch (error) {
      alert("Internal Server Error");
    }
  }

  if(!productInfo){
    return (
      <Table aria-label="Example empty table">
        <TableHeader>
          <TableColumn>Title</TableColumn>
          <TableColumn>Description</TableColumn>
          <TableColumn>Price</TableColumn>
          <TableColumn>Image Link</TableColumn>
          <TableColumn>Option</TableColumn>
        </TableHeader>
        <TableBody emptyContent={"Loading...."}>{[]}</TableBody>
      </Table>
    );
  }

  const columns = [
    {
      key: "p_id",
      label: "Product Id",
    },
    {
      key: "title",
      label: "Title",
    },
    {
      key: "description",
      label: "Description",
    },
    {
      key: "price",
      label: "Price",
    },
    {
      key: "image",
      label: "Image Link",
    },
    {
      key: "action",
      label: "Actions",
    },
    
  ];

  const rows = productInfo;

  return (
    <div>
      <Table aria-label="Product Data">
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.p_id}>
              {(columnKey) => (
                <TableCell>
                  {columnKey === "action" ? (
                    <div className="flex flex-row">
                      <Button id={item.p_id} variant="bordered" color="danger" onClick={deleteData}>
                        Delete
                      </Button>
                      <Link href={`/product/edit/${item.p_id}`}>
                        <Button color="primary" variant="faded">
                          Edit
                        </Button>
                      </Link>
                    </div>
                  ) : (
                    getKeyValue(item, columnKey)
                  )}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex justify-center p-10">
        <Link href={`/product/edit/add-product`} >
          <Button color="success" variant="solid" className="text-white">
            Add Product
          </Button>
        </Link>
      </div>
  </div>
  );

}



