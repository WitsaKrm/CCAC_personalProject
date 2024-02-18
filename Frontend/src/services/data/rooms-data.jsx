useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await endpoint.get("/API/rooms");
        console.log(response.data);
        setRooms(response.data);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };
    fetchRooms();
  }, []);