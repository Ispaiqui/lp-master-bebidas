export type CatalogCategory = "cerveja" | "bebida";

export type CatalogOccasion = "churrasco" | "jantar" | "presente";

export type CatalogItem = {
  id: string;
  name: string;
  category: CatalogCategory;
  imageSrc: string | null;
  occasions: CatalogOccasion[];
};

function rawpixel(id: string) {
  return `https://images.rawpixel.com/editor_1024/${id}.jpg`;
}

export const catalog: CatalogItem[] = [
  {
    id: "cerveja-pilsen",
    name: "Cerveja Pilsen",
    category: "cerveja",
    imageSrc: rawpixel(
      "czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcHg3MTA2MTAtaW1hZ2Uta3d2eGk3MGEuanBn",
    ),
    occasions: ["churrasco"],
  },
  {
    id: "cerveja-lager",
    name: "Cerveja Lager",
    category: "cerveja",
    imageSrc: rawpixel(
      "czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvaXMxMTExOC1pbWFnZS1rd3lzZzF5dy5qcGc",
    ),
    occasions: ["churrasco", "jantar"],
  },
  {
    id: "cerveja-ipa",
    name: "Cerveja IPA",
    category: "cerveja",
    imageSrc: rawpixel(
      "czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcHg5NjQ4NDQtaW1hZ2Uta3d2dXBmbWkuanBn",
    ),
    occasions: ["jantar"],
  },
  {
    id: "cerveja-long-neck",
    name: "Cerveja Long Neck",
    category: "cerveja",
    imageSrc: rawpixel(
      "cHJpdmF0ZS9zdGF0aWMvaW1hZ2Uvd2Vic2l0ZS8yMDIyLTA0L2xyL3B4MTYwNjA3Ni1pbWFnZS1rd3Z2bmF3cC5qcGc",
    ),
    occasions: ["churrasco", "presente"],
  },
  {
    id: "refrigerante",
    name: "Refrigerante",
    category: "bebida",
    imageSrc: rawpixel(
      "cHJpdmF0ZS9zdGF0aWMvaW1hZ2Uvd2Vic2l0ZS8yMDIyLTA0L2xyL2ZmNDUyMS1pbWFnZS1rd3Z4MW1mbC5qcGc",
    ),
    occasions: ["churrasco", "jantar"],
  },
  {
    id: "agua-mineral",
    name: "Água Mineral",
    category: "bebida",
    imageSrc: rawpixel(
      "czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvc3YxMzYyODUtaW1hZ2Uta3d5bmcxYWMuanBn",
    ),
    occasions: ["jantar"],
  },
  {
    id: "energetico",
    name: "Energético",
    category: "bebida",
    imageSrc: rawpixel(
      "czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvZnJjYW5fcmVkX292ZXJoZWFkX3ZpZXctaW1hZ2Uta3liZTUwcTAuanBn",
    ),
    occasions: ["presente"],
  },
  {
    id: "suco",
    name: "Suco",
    category: "bebida",
    imageSrc: rawpixel(
      "cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL2xyL3drMjE5NjM0OC1pbWFnZS5qcGc",
    ),
    occasions: ["jantar", "presente"],
  },
];
