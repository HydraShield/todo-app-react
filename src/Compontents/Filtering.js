const SelectTitle = (status) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "uncompleted":
        return "Uncompleted";
      case "all":
      default:
        return "All";
    }
  }

  export {SelectTitle};