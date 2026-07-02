import { useCallback, useEffect, useState } from 'react'
import productService from '@services/productService'

export default function useProducts() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isMutating, setIsMutating] = useState(false)
  const [error, setError] = useState('')

  const loadProducts = useCallback(async () => {
    try {
      setIsLoading(true)
      setError('')
      const data = await productService.getProducts()
      setProducts(data)
    } catch (loadError) {
      setError(loadError.message || 'Gagal memuat data produk.')
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    loadProducts()
  }, [loadProducts])

  const createProduct = async (payload) => {
    setIsMutating(true)
    try {
      const createdProduct = await productService.createProduct(payload)
      setProducts((currentProducts) => [createdProduct, ...currentProducts])
      return createdProduct
    } finally {
      setIsMutating(false)
    }
  }

  const updateProduct = async (id, payload) => {
    setIsMutating(true)
    try {
      const updatedProduct = await productService.updateProduct(id, payload)
      setProducts((currentProducts) =>
        currentProducts.map((product) =>
          product.id === id ? updatedProduct : product,
        ),
      )
      return updatedProduct
    } finally {
      setIsMutating(false)
    }
  }

  const deleteProduct = async (id) => {
    setIsMutating(true)
    try {
      await productService.deleteProduct(id)
      setProducts((currentProducts) =>
        currentProducts.filter((product) => product.id !== id),
      )
    } finally {
      setIsMutating(false)
    }
  }

  return {
    products,
    isLoading,
    isMutating,
    error,
    reload: loadProducts,
    createProduct,
    updateProduct,
    deleteProduct,
  }
}
