
export type THardwareLine = {
  id?: number | string;
  name?: string;
};

export type THardwareCategory = {
  id?: number | string;
  name?: string;
  equipmentLine?: THardwareLine;
};

export type THardware = {
  id?: number | string;
  brand?: string;
  model?: string;
  image?: string | null;
  type?: string;
  status?: string;
  equipmentCategory?: THardwareCategory;
};