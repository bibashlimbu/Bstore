import { useState } from "react";
import UpdateDataAccordion from "./UpdateDataAccordion";
import { Stack } from "@mui/material";
import { useUpdateUser } from "./useUpdateUser";
import UpdatePasswordAccordion from "./UpdatePasswordAccordion";

function UserProfile({ user }) {
  const { updateUser, isPending } = useUpdateUser();
  const {
    user_metadata: { fullName: currentFullName, phone: currentPhone },
  } = user;

  const [fullName, setFullName] = useState(currentFullName);
  const [phone, setPhone] = useState(currentPhone);

  function handleUpdateData() {
    if (!fullName || !phone) return;
    updateUser({ fullName, phone });
  }

  return (
    <Stack direction="column" gap={2}>
      <UpdateDataAccordion
        title={"Name"}
        titleValue={currentFullName}
        inputValue={fullName}
        setInputValue={setFullName}
        label={"Full Name"}
        onClick={handleUpdateData}
        isPending={isPending}
        inputFieldId={"fullName"}
      />
      <UpdateDataAccordion
        title={"Phone"}
        titleValue={currentPhone}
        inputValue={phone}
        setInputValue={setPhone}
        label={"Phone"}
        onClick={handleUpdateData}
        isPending={isPending}
        inputFieldId={"phone"}
      />
      <UpdatePasswordAccordion />
    </Stack>
  );
}

export default UserProfile;
