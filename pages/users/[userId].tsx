import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getUserById } from "@/lib/getUserById";
import { UserType } from "@/interface/UserType";
import Avatar from "@/components/Avatar";
import DataField from "@/components/DataField";

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
    <main className="flex flex-col items-center">
      <div className="flex items-center flex-col">
        <Avatar
          avatarURL={user?.avatarURL}
          userName={user?.userName}
          size="sm"
        />
        <h1 className="text-3xl font-semibold">@{user?.userName}</h1>
      </div>
      <div className="grid grid-rows-1 gap-8 py-10">
        <div className="card w-128 bg-base-200 shadow-xl h-max">
          <div className="card-body">
            <h2 className="card-title">Personal Information</h2>

            <DataField
              field="Name"
              value={`${user.firstName} ${user.lastName}`}
            />

            <DataField field="Blood Group" value={user.bloodGroup} />

            <DataField field="Gender" value={user.gender} />

            <DataField
              field="Height"
              value={user.height}
              measurementUnit="cm"
            />

            <DataField
              field="Weight"
              value={user.weight}
              measurementUnit="kg"
            />

            <DataField field="Phone" value={user.phone} />

            <DataField field="Email" value={user.email} />

            <DataField
              field="User Address"
              value={`${user?.address.address}, ${user?.address.city},${" "}
                ${user?.address.state} - ${user?.address.postalCode}`}
            />

            <DataField field="University" value={user.university} />

            <DataField
              field="Job"
              value={`${user?.company.name} - ${user?.company.department}:${" "}
                ${user?.company.title}`}
            />

            <div className="card-actions justify-end"></div>
          </div>
        </div>

        <div className="card w-128 bg-base-200 shadow-xl h-max">
          <div className="card-body">
            <h2 className="card-title">Bank Information</h2>

            <DataField field="Card Type" value={user.bank.cardType} />

            <DataField field="Card Number" value={user.bank.cardNumber} />

            <DataField field="Card Expire" value={user.bank.cardExpire} />

            <DataField field="Currency" value={user.bank.currency} />

            <DataField field="IBAN" value={user.bank.iban} />

            <div className="card-actions justify-end"></div>
          </div>
        </div>

        <div className="card w-128 bg-base-200 shadow-xl h-max">
          <div className="card-body">
            <h2 className="card-title">Connection Information</h2>

            <DataField field="IP" value={user.ip} />

            <DataField field="MacAddress" value={user.macAddress} />

            <DataField field="Maiden Name" value={user.maidenName} />

            <DataField field="SSN" value={user.ssn} />

            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserDetails;
