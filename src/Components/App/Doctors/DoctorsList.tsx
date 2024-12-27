import React from "react";
import { motion } from "framer-motion";
import { Card, Badge, Button, Text, Group, Image } from "@mantine/core";

const doctorData = [
  {
    id: 1,
    name: "Dr. Sameen",
    specialization: "Orthopedic Surgeon",
    price: "Tk. 300",
    tags: ["Bones", "Spine"],
    availability: "Mon",
    profilePic: "https://images.pexels.com/photos/29881327/pexels-photo-29881327/free-photo-of-siberian-husky-dog-with-striking-blue-eyes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with actual image
  },
  {
    id: 2,
    name: "Dr. Robin",
    specialization: "Cardiologist",
    price: "Tk. 500",
    tags: ["Heart", "Health"],
    availability: "Tue",
    profilePic: "https://images.pexels.com/photos/11927589/pexels-photo-11927589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with actual image
  },
  {
    id: 3,
    name: "Dr. Zaheen",
    specialization: "Oncologist",
    price: "Tk. 500",
    tags: ["Heart", "Health"],
    availability: "Wed",
    profilePic: "https://images.pexels.com/photos/12800455/pexels-photo-12800455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with actual image
  },
];

function DoctorsList() {
  return (
    <div className="p-6 flex flex-col gap-4">
      {doctorData.map((doctor, index) => (
        <motion.div
          key={doctor.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <Card
            shadow="sm"
            radius="md"
            className="hover:shadow-lg transition-shadow flex flex-row items-center p-4 border border-gray-200"
          >
            {/* Image Column */}
            <div className="flex-shrink-0 w-1/5 flex justify-center items-center">
              <Image
                src={doctor.profilePic}
                alt={doctor.name}
                width={150}
                height={150}
                radius="50%"
                className="border rounded-full"
              />
            </div>
            
            {/* Text Column */}
            <div className="flex-grow w-3/5 px-4">
              <Text size="xl" className="text-lg font-semibold">
                {doctor.name}
              </Text>
              <Text size="sm" color="dimmed">
                {doctor.specialization}
              </Text>
              <Group mt={6}>
                {doctor.tags.map((tag) => (
                  <Badge
                    key={tag}
                    className="text-blue-500 border-blue-500"
                    variant="outline"
                  >
                    {tag}
                  </Badge>
                ))}
              </Group>
              <Badge
                className="mt-2 bg-green-100 text-green-700"
                variant="filled"
              >
                {doctor.availability}
              </Badge>
            </div>

            {/* Price and Buttons Column */}
            <div className="w-1/5 flex flex-col items-end">
              <Text size="lg" className="mb-2 text-gray-600 font-semibold">
                {doctor.price}
              </Text>
              <div className="flex flex-col gap-2">
                <Button
                  className="bg-blue-500 hover:bg-blue-600 text-white"
                  size="md"
                >
                  View Profile
                </Button>
                <Button
                  className="bg-sky-500 hover:bg-sky-600 text-white"
                  size="md"
                >
                  Book Now
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

export default DoctorsList;
