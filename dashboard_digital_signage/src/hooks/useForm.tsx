import axios from "axios";



export const useForm = async ( file: File | null, category: string) => {

  const formData = new FormData();
  //formData.append("category", fileData.categories);
  if (file) {
    formData.append("document", file);
  }

  try {
    const res = await axios.post(`http://localhost:7000/api/save-${category}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("Respuesta del servidor:", res.data);
    return await {status: res.status, message: res.data.message }
  } catch (error) {
    console.error("Error al enviar el formulario:", error);
    return await {status: 400, err: "Error al cargar el archivo, intentelo mas tarde"  }
  }

};
