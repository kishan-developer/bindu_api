
// corn product / => in this product type have a 6 type of data 
const CornProduct = [
    {
        "id": 121,
        "title": "Degermed Yellow Flaking Grits",
        "description": "Largest pieces of broken corn endosperm, free from husk and germ.",
        "packaging": { "weight": "50 Kg", "type": "HDPE Bags" },
        "applications": ["Ready-to-Eat Breakfast Cereals", "Snacks"],
        "specifications": [
            {
                "table_title": "2mm",
                "data": [
                    {
                        "category": "Physical & Chemical Characteristics",
                        "parameters": [
                            { "name": "Moisture", "specification": "11.00 - 13.50%", "result": "12.68%" },
                            { "name": "Crude fat (db.)", "specification": "0.80% max", "result": "0.58%" },
                            { "name": "Total Ash (db.)", "specification": "0.30% max", "result": "0.26%" },
                            { "name": "Aflatoxin", "specification": "15.00 ppb max", "result": "Comply" },
                            { "name": "Bulk Density", "specification": "79.50 - 83.50 Kg/HL", "result": "8.74 Kg/HL" },
                            { "name": "Damaged Grits", "specification": "15 pcs/1000 g max", "result": "9 pcs/1000 g" },
                            { "name": "Unfinished Grits", "specification": "150 pcs/1000 g max", "result": "126 pcs/1000 g" },
                            { "name": "Germ", "specification": "20 pcs/Kg", "result": "13 pcs/Kg" },
                            { "name": "Whole Kernels", "specification": "30 pcs/1000 g", "result": "15 pcs/1000 g" },
                            { "name": "White Corn", "specification": "15 pcs/1000 g", "result": "9 pcs/1000 g" },
                            { "name": "Foreign Material", "specification": "Nil", "result": "Nil" }
                        ]
                    },
                    {
                        "category": "Particle Size Distribution",
                        "parameters": [
                            {
                                "GRANULATION": "On 4000 microns",
                                "SPECIFICATION": "00.00 – 03.00 %",
                                "RESULTS": "00.74 %"
                            },
                            {
                                "GRANULATION": "On 3350 microns",
                                "SPECIFICATION": "00.00 – 15.00 %",
                                "RESULTS": "12.83 %"
                            },
                            {
                                "GRANULATION": "On 2000 microns",
                                "SPECIFICATION": "60.00 – 90.00 %",
                                "RESULTS": "85.84 %"
                            },
                            {
                                "GRANULATION": "PAN",
                                "SPECIFICATION": "00.00 – 02.00 %",
                                "RESULTS": "00.59 %"
                            }
                        ]
                    }
                ]
            },
            {
                "table_title": "3mm to 5mm",
                "data": [
                    {
                        "category": "Physical & Chemical Characteristics",
                        "parameters": [
                            { "name": "Moisture", "specification": "11.00 - 13.50%", "result": "12.57%" },
                            { "name": "Crude fat (db.)", "specification": "0.80% max", "result": "0.61%" },
                            { "name": "Total Ash (db.)", "specification": "0.30% max", "result": "0.24%" },
                            { "name": "Aflatoxin", "specification": "15.00 ppb max", "result": "Comply" },
                            { "name": "Bulk Density", "specification": "79.50 - 83.50 Kg/HL", "result": "81.74 Kg/HL" },
                            { "name": "Damaged Grits", "specification": "5 pcs/1000 g max", "result": "3 pcs/1000 g" },
                            { "name": "Unfinished Grits", "specification": "150 pcs/1000 g max", "result": "121 pcs/1000 g" },
                            { "name": "Germ", "specification": "2 pcs/Kg", "result": "1 pcs/Kg" },
                            { "name": "Whole Kernels", "specification": "70 pcs/1000 g", "result": "41 pcs/1000 g" },
                            { "name": "White Corn", "specification": "10 pcs/1000 g", "result": "5 pcs/1000 g" },
                            { "name": "Foreign Material", "specification": "Nil", "result": "Nil" }
                        ]
                    },
                    {
                        "category": "Particle Size Distribution",
                        "parameters": [
                            {
                                "GRANULATION": "On 5600 microns",
                                "SPECIFICATION": "00.00 – 07.00 %",
                                "RESULTS": "05.13 %"
                            },
                            {
                                "GRANULATION": "On 4750 microns",
                                "SPECIFICATION": "00.00 – 15.00 %",
                                "RESULTS": "13.83 %"
                            },
                            {
                                "GRANULATION": "On 4000 microns",
                                "SPECIFICATION": "15.00 – 65.00 %",
                                "RESULTS": "58.91 %"
                            },
                            {
                                "GRANULATION": "On 3350 microns",
                                "SPECIFICATION": "10.00 – 25.00 %",
                                "RESULTS": "21.54 %"
                            },
                            {
                                "GRANULATION": "Thru 3350 microns",
                                "SPECIFICATION": "00.00 – 01.00 %",
                                "RESULTS": "00.59 %"
                            }
                        ]
                    }
                ]
            }
        ]
    },

    {
        "id": 122,
        "title": "Degermed Yellow Corn Grits",
        "description": "Largest pieces of broken corn endosperm, free from husk and germ.",
        "packaging": [
            {
                "PACKAGING": "25 kg",
                "BAGS": "HDPE bags"
            },
            {
                "PACKAGING": "50 kg",
                "BAGS": "HDPE bags"
            },
            {
                "PACKAGING": "500 kg",
                "BAGS": "HDPE bags"
            }
        ],
        // "applications": ["Ready-to-Eat Breakfast Cereals", "Snacks"],
        "specifications": [
            {
                "table_title": "102 (Coarse)",
                "data": [
                    {
                        "category": "Physical & Chemical Characteristics",
                        "parameters": [
                            {
                                "PARAMETER": "Moisture",
                                "SPECIFICATION": "Max 14.00 %",
                                "": ""
                            },
                            {
                                "PARAMETER": "Fat",
                                "SPECIFICATION": "Max 1.00 %",
                                "": ""
                            },
                            {
                                "PARAMETER": "Ash",
                                "SPECIFICATION": "Max 0.70 %",
                                "": ""
                            },
                            {
                                "PARAMETER": "Foreign Material",
                                "SPECIFICATION": "Max 0.02 %",
                                "": ""
                            },
                            {
                                "PARAMETER": "Black Specs",
                                "SPECIFICATION": "12 pcs /10sq inch",
                                "": ""
                            }
                        ]
                    },
                    {
                        "category": "Particle Size Distribution",
                        "parameters": [
                            {
                                "GRANULATION": "1400 microns",
                                "SPECIFICATION": "00.00 – 01.00 %",
                                "": ""
                            },
                            {
                                "GRANULATION": "1180 microns",
                                "SPECIFICATION": "00.00 – 20.00 %",
                                "": ""
                            },
                            {
                                "GRANULATION": "1000 microns",
                                "SPECIFICATION": "25.00 – 60.00 %",
                                "": ""
                            },
                            {
                                "GRANULATION": "850 microns",
                                "SPECIFICATION": "20.00 – 50.00 %",
                                "": ""
                            },
                            {
                                "GRANULATION": "710 microns",
                                "SPECIFICATION": "05.00 – 15.00 %",
                                "": ""
                            },
                            {
                                "GRANULATION": "600 microns",
                                "SPECIFICATION": "00.00 – 05.00 %",
                                "": ""
                            },
                            {
                                "GRANULATION": "425 microns",
                                "SPECIFICATION": "00.00 – 01.00 %",
                                "": ""
                            },
                            {
                                "GRANULATION": "PAN",
                                "SPECIFICATION": "00.00 – 00.50 %",
                                "": ""
                            },
                            {
                                "GRANULATION": "*Testing done on regulatory requirement basis only",
                                "SPECIFICATION": "",
                                "": ""
                            }
                        ]
                    }
                ]
            },
            {
                "table_title": "104 (Medium)",
                "data": [
                    {
                        "category": "Physical & Chemical Characteristics",
                        "parameters": [
                            {
                                "PARAMETER": "Moisture",
                                "SPECIFICATION": "Max 14.00 %",
                                "": ""
                            },
                            {
                                "PARAMETER": "Fat",
                                "SPECIFICATION": "Max 1.50 %",
                                "": ""
                            },
                            {
                                "PARAMETER": "Ash",
                                "SPECIFICATION": "Max 01.00 %",
                                "": ""
                            },
                            {
                                "PARAMETER": "Black Specs",
                                "SPECIFICATION": "12 pcs /10sq inch",
                                "": ""
                            },
                            {
                                "PARAMETER": "Foreign Material",
                                "SPECIFICATION": "Max 0.02%",
                                "": ""
                            }
                        ]
                    },
                    {
                        "category": "Particle Size Distribution",
                        "parameters": [
                            {
                                "GRANULATION": "On 1180 microns",
                                "SPECIFICATION": "00.00 — 01.00 %",
                                "": ""
                            },
                            {
                                "GRANULATION": "On 850 microns",
                                "SPECIFICATION": "00.00 — 06.00 %",
                                "": ""
                            },
                            {
                                "GRANULATION": "On 710 microns",
                                "SPECIFICATION": "10.00 – 22.00 %",
                                "": ""
                            },
                            {
                                "GRANULATION": "On 600 microns",
                                "SPECIFICATION": "35.00 – 45.00 %",
                                "": ""
                            },
                            {
                                "GRANULATION": "On 425 microns",
                                "SPECIFICATION": "30.00 – 45.00 %",
                                "": ""
                            },
                            {
                                "GRANULATION": "On 300 microns",
                                "SPECIFICATION": "00.00 – 05.00 %",
                                "": ""
                            },
                            {
                                "GRANULATION": "On 250 microns",
                                "SPECIFICATION": "00.00 – 02.00 %",
                                "": ""
                            },
                            {
                                "GRANULATION": "Thru 250 microns",
                                "SPECIFICATION": "00.00 – 02.00 %",
                                "": ""
                            }
                        ]
                    }
                ]
            },
            {
                "table_title": "107 (Fine)",
                "data": [
                    {
                        "category": "Physical & Chemical Characteristics",
                        "parameters": [
                            {
                                "PARAMETER": "Moisture",
                                "SPECIFICATION": "Max 14.00 %",
                                "": ""
                            },
                            {
                                "PARAMETER": "Fat",
                                "SPECIFICATION": "Max 1.00 %",
                                "": ""
                            },
                            {
                                "PARAMETER": "Ash",
                                "SPECIFICATION": "Max 0.50 %",
                                "": ""
                            },
                            {
                                "PARAMETER": "Foreign Material",
                                "SPECIFICATION": "0.02 %",
                                "": ""
                            },
                            {
                                "PARAMETER": "Black Specs",
                                "SPECIFICATION": "12 pcs /10sq inch",
                                "": ""
                            },
                            {
                                "PARAMETER": "*Total Aflatoxin",
                                "SPECIFICATION": "20 ppb max",
                                "": ""
                            }
                        ]
                    },
                    {
                        "category": "Particle Size Distribution",
                        "parameters": [
                            {
                                "GRANULATION": "On 1000 microns",
                                "SPECIFICATION": "00.00 – 05.00 %",
                                "": ""
                            },
                            {
                                "GRANULATION": "On 850 microns",
                                "SPECIFICATION": "20.00 – 60.00 %",
                                "": ""
                            },
                            {
                                "GRANULATION": "On 710 microns",
                                "SPECIFICATION": "15.00 – 40.00 %",
                                "": ""
                            },
                            {
                                "GRANULATION": "On 600 microns",
                                "SPECIFICATION": "10.00 – 35.00 %",
                                "": ""
                            },
                            {
                                "GRANULATION": "On 425 microns",
                                "SPECIFICATION": "00.00 – 20.00 %",
                                "": ""
                            },
                            {
                                "GRANULATION": "On 310 microns",
                                "SPECIFICATION": "00.00 – 05.00 %",
                                "": ""
                            },
                            {
                                "GRANULATION": "On 105 microns",
                                "SPECIFICATION": "00.00 – 02.00 %",
                                "": ""
                            },
                            {
                                "GRANULATION": "PAN",
                                "SPECIFICATION": "00.00 – 01.00 %",
                                "": ""
                            }
                        ]
                    }
                ]
            },

            {
                "table_title": "108 (Common)",
                "data": [
                    {
                        "category": "Physical & Chemical Characteristics",
                        "parameters": [
                            {
                                "PARAMETER": "Moisture",
                                "SPECIFICATION": "Max 14.00 %",
                                "": ""
                            },
                            {
                                "PARAMETER": "Fat",
                                "SPECIFICATION": "Max 1.50 %",
                                "": ""
                            },
                            {
                                "PARAMETER": "Ash",
                                "SPECIFICATION": "0.20 – 0.70 %",
                                "": ""
                            },
                            {
                                "PARAMETER": "Foreign Material",
                                "SPECIFICATION": "Max 0.02%",
                                "": ""
                            },
                            {
                                "PARAMETER": "Black Specs",
                                "SPECIFICATION": "12 pcs /10sq inch",
                                "": ""
                            }
                        ]
                    },
                    {
                        "category": "Particle Size Distribution",
                        "parameters": [
                            {
                                "GRANULATION": "On 850 microns",
                                "SPECIFICATION": "00.00 — 01.00 %",
                                "": ""
                            },
                            {
                                "GRANULATION": "On 710 microns",
                                "SPECIFICATION": "00.00 – 15.00 %",
                                "": ""
                            },
                            {
                                "GRANULATION": "On 500 microns",
                                "SPECIFICATION": "40.00 – 70.00 %",
                                "": ""
                            },
                            {
                                "GRANULATION": "On 355 microns",
                                "SPECIFICATION": "20.00 – 45.00 %",
                                "": ""
                            },
                            {
                                "GRANULATION": "On 250 microns",
                                "SPECIFICATION": "00.00 – 12.00 %",
                                "": ""
                            },
                            {
                                "GRANULATION": "Thru 250 microns",
                                "SPECIFICATION": "00.00 – 02.00 %",
                                "": ""
                            }
                        ]
                    }
                ]
            },

            {
                "table_title": "109 (Superfine)",
                "data": [
                    {
                        "category": "Physical & Chemical Characteristics",
                        "parameters": [
                            {
                                "PARAMETER": "Moisture",
                                "SPECIFICATION": "Max 14.00 %",
                                "": ""
                            },
                            {
                                "PARAMETER": "Fat",
                                "SPECIFICATION": "Max 2.25 %",
                                "": ""
                            },
                            {
                                "PARAMETER": "Ash",
                                "SPECIFICATION": "Max 1.0 %",
                                "": ""
                            },
                            {
                                "PARAMETER": "Foreign Material",
                                "SPECIFICATION": "Max 0.02%",
                                "": ""
                            },
                            {
                                "PARAMETER": "Black Specs",
                                "SPECIFICATION": "12 / sq. Inch",
                                "": ""
                            }
                        ]
                    },
                    {
                        "category": "Particle Size Distribution",
                        "parameters": [
                            {
                                "GRANULATION": "Retention on 30 ASTM",
                                "SPECIFICATION": "00.00 – 02.00 %",
                                "": ""
                            },
                            {
                                "GRANULATION": "Retention on 40 ASTM",
                                "SPECIFICATION": "00.00 – 08.00 %",
                                "": ""
                            },
                            {
                                "GRANULATION": "Retention on 60 ASTM",
                                "SPECIFICATION": "65.00 – 90.00 %",
                                "": ""
                            },
                            {
                                "GRANULATION": "Retention on 80 ASTM",
                                "SPECIFICATION": "00.00 – 10.00 %",
                                "": ""
                            },
                            {
                                "GRANULATION": "Retention on Pan",
                                "SPECIFICATION": "00.00 – 15.00 %",
                                "": ""
                            }
                        ]
                    }
                ]
            }
        ]
    },

    {
        "id": 123,
        "title": "Corn Flour",
        "description": "It is the fine powder obtained during the milling stage. It is uniformly milled to achieve a consistent texture.",
        "packaging": [
            {
                "PACKAGING": "25 kg",
                "BAGS": "HDPE Bags"
            },
            {
                "PACKAGING": "50 kg",
                "BAGS": "HDPE Bags"
            },
            {
                "PACKAGING": "500 kg",
                "BAGS": "HDPE Bags"
            }
        ],
        // "applications": ["Ready-to-Eat Breakfast Cereals", "Snacks"],
        "specifications": [
            {
                "table_title": "102 (Regular)",
                "data": [
                    {
                        "category": "Physical & Chemical Characteristics",
                        "parameters": [
                            {
                                "Parameter": "Moisture",
                                "Standard": "11.00 – 14.00 %"
                            },
                            {
                                "Parameter": "Fat",
                                "Standard": "0.00 – 03.00 %"
                            },
                            {
                                "Parameter": "Ash",
                                "Standard": "01.00 %"
                            },
                            {
                                "Parameter": "Foreign Material",
                                "Standard": "Max 0.02%"
                            },
                            {
                                "Parameter": "Black Specs",
                                "Standard": "Absent"
                            }
                        ]
                    },
                    {
                        "category": "Particle Size Distribution",
                        "parameters": [
                            {
                                "Granulation": "On 300 microns",
                                "Standard": "00.00 – 02.00 %"
                            },
                            {
                                "Granulation": "On 250 microns",
                                "Standard": "00.00 – 10.00 %"
                            },
                            {
                                "Granulation": "On 210 microns",
                                "Standard": "00.00 – 25.00 %"
                            },
                            {
                                "Granulation": "PAN",
                                "Standard": "65.00 – 100.00 %"
                            }
                        ]
                    }
                ]
            },
            {
                "table_title": "103 (Superfine)",
                "data": [
                    {
                        "category": "Physical & Chemical Characteristics",
                        "parameters": [
                            {
                                "Parameter": "Moisture",
                                "Specifications": "Max 14.00 %"
                            },
                            {
                                "Parameter": "Fat",
                                "Specifications": "Max 3.00 %"
                            },
                            {
                                "Parameter": "Ash",
                                "Specifications": "Max 01.00 %"
                            },
                            {
                                "Parameter": "Foreign Material",
                                "Specifications": "Max 0.02 %"
                            },
                            {
                                "Parameter": "Black Specs",
                                "Specifications": "Absent"
                            }
                        ]
                    },
                    {
                        "category": "Particle Size Distribution",
                        "parameters": [
                            {
                                "Granulation": "On 150 microns",
                                "Specifications": "00.00 – 01.00 %"
                            },
                            {
                                "Granulation": "On 120 microns",
                                "Specifications": "00.00 – 02.00 %"
                            },
                            {
                                "Granulation": "On 100 microns",
                                "Specifications": "00.00 – 05.00 %"
                            },
                            {
                                "Granulation": "PAN",
                                "Specifications": "95.00 – 100.00 %"
                            }
                        ]
                    }
                ]
            }
        ]
    },

    {
        "id": 124,
        "title": "Alpha Corn Flour (Pregel Flour)",
        "description": "This is a food-grade, dry-milled, preservative-free flour made from 100% natural corn without adding any other ingredients or additives. It is cooked at a high temperature to give it a uniform texture and viscosity.",
        "packaging": [
            {
                "PACKAGING": "25 KG",
                "BAGS": "HDPE Bags"
            },
            {
                "PACKAGING": "50KG",
                "BAGS": "HDPE Bags"
            },
            {
                "PACKAGING": "500KG",
                "BAGS": "HDPE Bags"
            }
        ],

        // "applications": ["Cereals, Snacks, Pasta, Dry baked goods, Small baked goods, Pound cakes, Bakery ingredients, Ready-to-use flours, Sauces, Creams and Fillings"],

        "specifications": [
            {
                "table_title": "104A",
                "data": [
                    {
                        "category": "Physical & Chemical Characteristics",
                        "parameters": [
                            {
                                "Parameter": "Moisture",
                                "Standard": "07.00 – 09.00 %"
                            },
                            {
                                "Parameter": "Ash",
                                "Standard": "Max 1.50 %"
                            },
                            {
                                "Parameter": "Foreign Material",
                                "Standard": "0.05%"
                            },
                            {
                                "Parameter": "Black Specs",
                                "Standard": "12 pcs /10sq. Inch"
                            }
                        ]
                    },
                    {
                        "category": "Particle Size Distribution",
                        "parameters": [
                            {
                                "Granulation": "On 300 microns",
                                "Specifications": "00.00 – 10.00 %"
                            },
                            {
                                "Granulation": "On 250 microns",
                                "Specifications": "00.00 – 15.00 %"
                            },
                            {
                                "Granulation": "On 210 microns",
                                "Specifications": "00.00 – 10.00 %"
                            },
                            {
                                "Granulation": "PAN",
                                "Specifications": "60.00 – 80.00 %"
                            }
                        ]
                    }
                ]
            },

        ]
    },

    {
        "id": 125,
        "title": "CATTLE FIELDS",
        "description": "Cattle Feed is a product of the dry milling of corn. It is creamish to light brown in color with a natural distinctive taste and odour.",
        "packaging": [
            {
                "PACKAGING": "39 KG",
                "BAGS": "HDPE Bags"
            }
        ],
        "applications": [
            ""
        ],
        "specifications": [
            {
                "table_title": "",
                "data": [
                    {
                        "category": "Physical & Chemical Characteristics",
                        "parameters": [
                            {
                                "PARAMETER": "Moisture",
                                "SPECIFICATION": "Max 14.00 %",
                                "": ""
                            },
                            {
                                "PARAMETER": "Fat",
                                "SPECIFICATION": "03.00-05.00 %",
                                "": ""
                            },
                            {
                                "PARAMETER": "Ash",
                                "SPECIFICATION": "Max 2.00 %",
                                "": ""
                            },
                            {
                                "PARAMETER": "Protein",
                                "SPECIFICATION": "07.00-09.00 %",
                                "": ""
                            },
                            {
                                "PARAMETER": "Foreign Material",
                                "SPECIFICATION": "Absent",
                                "": ""
                            }
                        ]
                    },
                    {
                        "category": "",
                        "parameters": [
                            {
                                "GRANULATION": "On 1680 microns",
                                "SPECIFICATION": "00.00 – 10.00 %",
                                "": ""
                            },
                            {
                                "GRANULATION": "Thru 1680 microns",
                                "SPECIFICATION": "90.00 – 100.00 %",
                                "": ""
                            }
                        ]
                    }
                ]
            },

        ]
    },

    {
        "id": 126,
        "title": "E- CATTLE FIELDS",
        "description": "E-Cattle Feed is a product of the dry milling of corn. It is creamish to light brown in color with natural distinctive taste and odour.",
        "packaging": [
            {
                "PACKAGING": "40KGS",
                "BAGS": "HDPE Bags"
            }
        ],

        "applications": [
            ""
        ],

        "specifications": [
            {
                "table_title": "",
                "data": [
                    {
                        "category": "",
                        "parameters": [
                            {
                                "PARAMETER": "Appearance",
                                "SPECIFICATION": "Comparable to General description for corn germ.",
                                "": ""
                            },
                            {
                                "PARAMETER": "Odour",
                                "SPECIFICATION": "No off odour",
                                "": ""
                            },
                            {
                                "PARAMETER": "Moisture",
                                "SPECIFICATION": "Max 14.00 %",
                                "": ""
                            },
                            {
                                "PARAMETER": "Fat content (%)",
                                "SPECIFICATION": "Min 15.00 %",
                                "": ""
                            },
                            {
                                "PARAMETER": "Ash",
                                "SPECIFICATION": "Max 5.00 %",
                                "": ""
                            }
                        ]
                    },

                ]
            },

        ]
    }

]

export default CornProduct;