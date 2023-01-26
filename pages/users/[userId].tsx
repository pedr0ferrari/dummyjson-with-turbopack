import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getUserById } from "@/lib/getUserById";
import { UserType } from "@/interface/UserType";
import Avatar from "@/components/Avatar";

const UserDetails: NextPage = () => {
  const router = useRouter();
  const userId = router.query?.userId as string;
  const [user, setUser] = useState<UserType | null>(null);

  const handleGetUserById = async (userId: string) => {
    const userById = await getUserById(userId);
    setUser(userById);
  };

  useEffect(() => {
    handleGetUserById(userId);
  }, [userId]);

  if (!user) return null;

  return (
    <main className="flex justify-center">
      <div className="">
        <Avatar
          avatarURL={user?.avatarURL}
          userName={user?.userName}
          size="sm"
        />
        <h1 className="text-3xl font-semibold">@{user?.userName}</h1>
      </div>
      <div className="grid-rows-2">
        <div aria-label="personal information" className=" p-4">
          <h2 className="text-xl font-medium">Personal Information</h2>
        </div>

        <div className="card w-128 bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Personal Information</h2>
            <div className="flex gap-2">
              <p className="font-medium">Name: </p>
              <p>
                {user?.firstName} {user?.lastName}
              </p>
            </div>

            <div className="flex gap-2">
              <p className="font-medium">Blood Group: </p>
              <p>{user?.bloodGroup}</p>
            </div>

            <div className="flex gap-2">
              <p className="font-medium">Gender: </p>
              <p>{user?.gender}</p>
            </div>

            <div className="flex gap-2">
              <p className="font-medium">Height: </p>
              <p>{user?.height} cm</p>
            </div>

            <div className="flex gap-2">
              <p className="font-medium">Weight: </p>
              <p>{user?.weight} kg</p>
            </div>

            <div className="flex gap-2">
              <p className="font-medium">Phone: </p>
              <p>{user?.phone}</p>
            </div>

            <div className="flex gap-2">
              <p className="font-medium">Email: </p>
              <p>{user?.email}</p>
            </div>

            <div className="flex gap-2">
              <p className="font-medium">User Address:</p>
              <p>
                {user?.address.address}, {user?.address.city},{" "}
                {user?.address.state} - {user?.address.postalCode}
              </p>
            </div>
            <div className="flex gap-2">
              <p className="font-medium">University: </p>
              <p>{user?.university}</p>
            </div>

            <div className="flex gap-2">
              <p className="font-medium">Job: </p>
              <p>
                {user?.company.name} - {user?.company.department}:{" "}
                {user?.company.title}
              </p>
            </div>
            <div className="card-actions justify-end"></div>
          </div>
        </div>

        <div className="card w-128 bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Bank Information</h2>
            <div className=" flex gap-2">
              <p className="font-medium">Card Type: </p>
              <p>{user?.bank.cardType}</p>
            </div>
            <div className=" flex gap-2">
              <p className="font-medium">Card Number: </p>
              <p>{user?.bank.cardNumber}</p>
            </div>
            <div className=" flex gap-2">
              <p className="font-medium">Card Expire: </p>
              <p>{user?.bank.cardExpire}</p>
            </div>
            <div className=" flex gap-2">
              <p className="font-medium">Currency: </p>
              <p>{user?.bank.currency}</p>
            </div>
            <div className=" flex gap-2">
              <p className="font-medium">IBAN: </p>
              <p>{user?.bank.iban}</p>
            </div>
            <div className="card-actions justify-end"></div>
          </div>
        </div>

        <div className="card w-128 bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Connection Information</h2>
            <div className=" flex gap-2">
              <p className="font-medium">IP: </p>
              <p>{user?.ip}</p>
            </div>
            <div className=" flex gap-2">
              <p className="font-medium">MacAddress: </p>
              <p>{user?.macAddress}</p>
            </div>
            <div className=" flex gap-2">
              <p className="font-medium">Maiden Name: </p>
              <p>{user?.maidenName}</p>
            </div>
            <div className=" flex gap-2">
              <p className="font-medium">SSN: </p>
              <p>{user?.ssn}</p>
            </div>

            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserDetails;
