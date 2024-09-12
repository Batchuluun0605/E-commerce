import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Container from "@/components/custom/Container";
import Row from "@/components/custom/Row";
import Link from "next/link";
import Product from "@/components/modules/product/";

const page = () => {
  return (
    <>
      <section className="my-10">
        <Container>
          <Row>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <Link href="/" className="text-xl hover:text-primary-500 ">
                    Home
                  </Link>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <Link
                    href="/products"
                    className="text-xl hover:text-primary-500 font-bold"
                  >
                    Store
                  </Link>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </Row>
        </Container>
      </section>

      <Product />
    </>
  );
};

export default page;
