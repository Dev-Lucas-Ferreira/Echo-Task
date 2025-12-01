import express, { application } from "express";
import cors from "cors";
import supabase from "./supabaseClient.js";

const app = express();
app.use(cors());
app.use(express.json());

// ROTA DE CADASTRO
app.post("/cadastro", async (req, res) => {
  const { nome, gmail, idade, senha } = req.body;

  // validação simples
  if (!nome || !gmail || !idade || !senha) {
    return res.status(400).json({ erro: "Todos os campos são obrigatórios!" });
  }

  // inserir no Supabase
  const { data, error } = await supabase
    .from("usuarios")
    .insert([
      {
        nome: nome,
        gmail: gmail,
        idade: idade,
        senha: senha,
        ponto: 0
      }
    ])
    .select();

  if (error) {
    return res.status(500).json({ erro: error.message });
  }

  res.json({
    mensagem: "Usuário cadastrado com sucesso!",
    usuario: data
  });
});

// Iniciar servidor
app.listen(process.env.PORT, () =>
  console.log(`Backend rodando na porta ${process.env.PORT}`)
);