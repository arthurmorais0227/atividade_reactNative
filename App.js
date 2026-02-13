import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.iconBox}>
        <Ionicons name="school" size={36} color="#7C3AED" />
      </View>

      <Text style={styles.titulo}>Bem-vindo de volta</Text>
      <Text style={styles.subtitulo}>Acesse sua conta do SENAI</Text>

      <Text style={styles.label}>E-mail</Text>
      <View style={styles.inputBox}>
        <Ionicons name="mail-outline" size={20} color="#9CA3AF" />
        <TextInput
          placeholder="seu@email.com"
          placeholderTextColor="#9CA3AF"
          style={styles.input}
          keyboardType="email-address"
        />
      </View>

      <Text style={styles.label}>Senha</Text>
      <View style={styles.inputBox}>
        <Ionicons name="lock-closed-outline" size={20} color="#9CA3AF" />
        <TextInput
          placeholder="********"
          placeholderTextColor="#9CA3AF"
          secureTextEntry={true}
          style={styles.input}
        />
      </View>

      <View style={styles.esqueci}>
        <Text style={styles.esqueciTexto}>Esqueci minha senha</Text>
      </View>

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoTexto}>Entrar →</Text>
      </TouchableOpacity>

      <View style={styles.separador}>
        <View style={styles.linha} />
        <Text style={styles.ou}>Ou entre com</Text>
        <View style={styles.linha} />
      </View>

      <View style={styles.social}>
        <TouchableOpacity style={styles.socialBtn}>
          <Ionicons name="logo-google" size={22} color="#7C3AED" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialBtn}>
          <Ionicons name="logo-facebook" size={22} color="#7C3AED" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialBtn}>
          <Ionicons name="logo-instagram" size={22} color="#7C3AED" />
        </TouchableOpacity>
      </View>

      <Text style={styles.footer}>
        Não tem uma conta? <Text style={styles.cadastrar}>Cadastre-se</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    padding: 24,
    justifyContent: "center",
  },

  iconBox: {
    width: 64,
    height: 64,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#7C3AED",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 6,
  },

  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#111827",
    textAlign: "center",
  },

  subtitulo: {
    fontSize: 15,
    color: "#6B7280",
    textAlign: "center",
    marginBottom: 30,
  },

  label: {
    fontSize: 14,
    color: "#111827",
    marginBottom: 6,
  },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 52,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    color: "#111827",
  },

  esqueci: {
    alignItems: "flex-end",
  },

  esqueciTexto: {
    color: "#7C3AED",
    fontWeight: "bold"
  },

  botao: {
    backgroundColor: "#7C3AED",
    height: 54,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
    shadowColor: "#7C3AED",
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 6,
    color: "#FFFFFF",
  },

  botaoTexto: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  separador: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  linha: {
    flex: 1,
    height: 1,
    backgroundColor: "#7C3AED",
  },

  ou: {
    marginHorizontal: 12,
    color: "#7C3AED",
    fontSize: 14,
  },

  social: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 14,
    marginBottom: 24,
  },

  socialBtn: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    alignItems: "center",
    justifyContent: "center",
  },

  footer: {
    textAlign: "center",
    color: "#6B7280",
  },

  cadastrar: {
    color: "#7C3AED",
    fontWeight: "bold",
  },
});
