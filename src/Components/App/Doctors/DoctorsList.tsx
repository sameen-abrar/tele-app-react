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
    name: "Dr. Ayesha",
    specialization: "Cardiologist",
    price: "Tk. 500",
    tags: ["Heart", "Health"],
    availability: "Tue",
    profilePic: "https://images.pexels.com/photos/11927589/pexels-photo-11927589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with actual image
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
            className="hover:shadow-lg transition-shadow flex justify-between items-center p-4 border border-gray-200"
          >
            <Group>
              {/* Profile Picture */}
              <Image
                src={doctor.profilePic}
                alt={doctor.name}
                width={80}
                height={80}
                radius="50%"
                className="border rounded-full"
              />
              {/* Doctor Info */}
              <div>
                <Text size="xl" className="text-lg">
                  {doctor.name}{" "}
                  <span className="text-green-500">&#9679;</span>
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
                  radius="sm"
                  variant="filled"
                >
                  {doctor.availability}
                </Badge>
              </div>
            </Group>
            {/* Price and Buttons */}
            <div className="flex flex-col items-end">
              <Text size="lg" className="mb-2 text-gray-600">
                {doctor.price}
              </Text>
              <div className="flex gap-2">
                <Button
                  className="bg-blue-500 hover:bg-blue-600 text-white"
                  size="xs"
                >
                  View Profile
                </Button>
                <Button
                  className="bg-sky-500 hover:bg-sky-600 text-white"
                  size="xs"
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
