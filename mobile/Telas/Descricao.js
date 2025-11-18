import { useRoute } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Descricao() {
  const route = useRoute();
  const { id } = route.params;

  const [info, setInfo] = useState({});

  async function ById() {
    try {
      const response = await axios.get(
        `https://proweb.leoproti.com.br/alunos/${id}`
      );
      setInfo(response.data);
    } catch (error) {
      console.log("ERRO");
    }
  }

  useEffect(() => {
    ById();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        paddingTop: 50,
        alignItems: "center",
        backgroundColor: "#F5F5F5",
      }}
    >
      <View
        style={{
          width: 350,
          backgroundColor: "#FFF",
          padding: 20,
          borderRadius: 10,
          gap: 10,
          elevation: 4,
        }}
      >
        <Text style={{ fontSize: 18 }}>Nome: {info.nome}</Text>
        <Text style={{ fontSize: 18 }}>Turma: {info.turma}</Text>
        <Text style={{ fontSize: 18 }}>Curso: {info.curso}</Text>
        <Text style={{ fontSize: 18 }}>Matrícula: {info.matricula}</Text>
      </View>
    </View>
  );
}
