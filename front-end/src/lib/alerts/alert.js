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

export const warnAlert = (message) => {
  return swal.fire({
    title: "Warning!",
    text: message,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    cancelButtonText: "Cancel",
    confirmButtonText: "Confirm",
  });
};
