import Layout from "@/components/Layout";
import { Card_Contact } from "@/container/Contact/Card_Contact";
import Herosection_contact from "@/container/Contact/Herosection_contact";
import MapSection_Contact from "@/container/Contact/MapSection_Contact";
import React from "react";

export default function ContactPage() {
  return (
    <Layout>
      <Herosection_contact />
      <Card_Contact from={undefined} />
      <MapSection_Contact />
    </Layout>
  );
}
