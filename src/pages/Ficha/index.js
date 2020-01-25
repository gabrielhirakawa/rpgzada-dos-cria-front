import React from "react";
import {
  Content,
  ComboBoxItem,
  ComboBox,
  Form,
  Input,
  InputItem,
  Button
} from "./style";
export default function Ficha() {
  return (
    <Content>
      <h1>Cadastrar nova ficha</h1>
      <Form>
        <InputItem>
          <label>Nome:</label>
          <Input></Input>
        </InputItem>
        <InputItem>
          <label>Nome Personagem:</label>
          <Input></Input>
        </InputItem>
        <ComboBox>
          <ComboBoxItem>
            <label>Raça:</label>
            <select>
              <option value="Pé de barro">Pé de barro</option>
              <option value="Anão">Anão</option>
              <option value="Elfo">Elfo</option>
              <option value="Humano">Humano</option>
              <option value="Orc">Orc</option>
              <option value="Vampiro">Vampiro</option>
              <option value="Centauro">Centauro</option>
              <option value="Tritão">Tritão</option>
            </select>
          </ComboBoxItem>
          <ComboBoxItem>
            <label>Classe:</label>
            <select>
              <option value="Doente">Doente</option>
              <option value="Ladino">Ladino</option>
              <option value="Druida">Druida</option>
              <option value="Necromante">Necromante</option>
              <option value="Bardo">Bardo</option>
              <option value="Pirata">Pirata</option>
              <option value="Arqueiro">Arqueiro</option>
              <option value="Assassino">Assassino</option>
              <option value="Viking">Viking</option>
              <option value="Samurai">Samurai</option>
              <option value="Clérigo">Clérigo</option>
              <option value="Alquimista">Alquimista</option>
            </select>
          </ComboBoxItem>
        </ComboBox>
        <ComboBox>
          <ComboBoxItem>
            <label>Habilidade 1:</label>
            <select>
              <option>Bigode de mel</option>
            </select>
          </ComboBoxItem>
          <ComboBoxItem>
            <label>Habilidade 2:</label>
            <select>
              <option>Epilepsia Cósmica</option>
            </select>
          </ComboBoxItem>
        </ComboBox>
      </Form>

      <Button>Concluir</Button>
    </Content>
  );
}
