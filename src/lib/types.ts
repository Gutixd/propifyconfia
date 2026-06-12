export type Operacion = "venta" | "arriendo";
export type TipoPropiedad = "casa" | "departamento";

export interface Propiedad {
  id: string;
  titulo: string;
  operacion: Operacion;
  tipo: TipoPropiedad;
  precio_uf: number;
  precio_clp: number;
  comuna: string;
  direccion: string;
  m2: number;
  dormitorios: number;
  banos: number;
  imagen: string;
  destacada: boolean;
  descripcion: string;
}

export interface Testimonio {
  id: string;
  nombre: string;
  comuna: string;
  texto: string;
  estrellas: number;
  operacion: string;
  imagen: string;
}

export interface MiembroEquipo {
  nombre: string;
  cargo: string;
  descripcion: string;
  imagen: string;
  linkedin?: string;
}

export interface FiltrosPropiedades {
  operacion: Operacion | "todas";
  tipo: TipoPropiedad | "todos";
  comuna: string;
  dormitorios: number | null;
  precioMax: number | null;
}
