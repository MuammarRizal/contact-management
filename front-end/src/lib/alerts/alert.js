import swal from "sweetalert2";

export const SuccessAlert = (message) => {
  swal.fire({
    title: "Success",
    text: message,
    icon: "success",
  });
};

export const errorAlert = (message) => {
  swal.fire({
    title: "Failed",
    text: message,
    icon: "error",
  });
};
