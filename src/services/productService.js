const INITIAL_PRODUCTS = [
  {
    id: 1,
    name: 'Mie Ayam Original',
    category: 'Mie Ayam',
    price: 20499,
    status: 'ACTIVE',
    image: 'placeholder',
  },
  {
    id: 2,
    name: 'Mie Yamin',
    category: 'Mie Ayam',
    price: 20499,
    status: 'ACTIVE',
    image: 'placeholder',
  },
  {
    id: 3,
    name: 'Mie Ayam Chilli Oil',
    category: 'Mie Ayam',
    price: 21499,
    status: 'ACTIVE',
    image: 'placeholder',
  },
  {
    id: 4,
    name: 'Ayam Extra',
    category: 'Topping',
    price: 3300,
    status: 'ACTIVE',
    image: 'placeholder',
  },
  {
    id: 5,
    name: 'Bakso',
    category: 'Topping',
    price: 3300,
    status: 'ACTIVE',
    image: 'placeholder',
  },
  {
    id: 6,
    name: 'Pangsit Goreng',
    category: 'Topping',
    price: 1600,
    status: 'ACTIVE',
    image: 'placeholder',
  },
  {
    id: 7,
    name: 'Pangsit Basah',
    category: 'Topping',
    price: 2600,
    status: 'ACTIVE',
    image: 'placeholder',
  },
]

let products = INITIAL_PRODUCTS.map((product) => ({ ...product }))

const wait = (value, delay = 450) =>
  new Promise((resolve) => {
    window.setTimeout(() => resolve(value), delay)
  })

const clone = (product) => ({ ...product })

const productService = {
  async getProducts() {
    return wait(products.map(clone), 650)
  },

  async getProductById(id) {
    const product = products.find((item) => item.id === Number(id))

    if (!product) {
      throw new Error('Produk tidak ditemukan.')
    }

    return wait(clone(product))
  },

  async createProduct(payload) {
    const product = {
      ...payload,
      id: products.length ? Math.max(...products.map((item) => item.id)) + 1 : 1,
      price: Number(payload.price),
      image: payload.image || 'placeholder',
    }

    products = [product, ...products]
    return wait(clone(product))
  },

  async updateProduct(id, payload) {
    const productIndex = products.findIndex((item) => item.id === Number(id))

    if (productIndex === -1) {
      throw new Error('Produk tidak ditemukan.')
    }

    const updatedProduct = {
      ...products[productIndex],
      ...payload,
      id: Number(id),
      price: Number(payload.price),
    }

    products = products.map((item, index) =>
      index === productIndex ? updatedProduct : item,
    )

    return wait(clone(updatedProduct))
  },

  async deleteProduct(id) {
    const productExists = products.some((item) => item.id === Number(id))

    if (!productExists) {
      throw new Error('Produk tidak ditemukan.')
    }

    products = products.filter((item) => item.id !== Number(id))
    return wait({ success: true })
  },
}

export default productService
