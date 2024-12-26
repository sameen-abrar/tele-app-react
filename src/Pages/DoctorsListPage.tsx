import { Title } from "@mantine/core";
import React from "react";
import DoctorsList from "../Components/App/Doctors/DoctorsList";

export default function DoctorsListPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="">
        {/* Adjust top padding as per navbar height */}
        <Title className="text-4xl font-bold text-blue-600">
          This is Doctors list
        </Title><br/>
        <DoctorsList />
      </div>
    </div>
  );
}
