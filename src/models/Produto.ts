import Categoria from './Categoria';

export default interface Produto {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  validade: string;
  categoria: Categoria | null;
}