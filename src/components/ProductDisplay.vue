<template>
  <div class="product">
    <div class="product-header">
      <div class="product-info">
        <h1>{{ product?.title }}</h1>
        <div class="brand">by {{ product?.brand }}</div>
        <div
          class="availability"
          :class="product?.availabilityStatus?.toLowerCase().replace(` `, ``)"
        >
          {{ product?.availabilityStatus }}
        </div>
        <div class="price-section">
          <span class="price">${{ product?.price }}</span>
          <span v-if="product?.discountPercentage" class="discount">
            {{ product?.discountPercentage }}% OFF
          </span>
        </div>
        <div class="shipping-warranty">
          <div class="info-box">
            <h3>
              <Truck />
              <span> Shipping Information </span>
            </h3>
            <p>{{ product.shippingInformation }}</p>
          </div>
          <div class="info-box">
            <h3>
              <Ribbon />
              <span>Warranty Information</span>
            </h3>
            <p>{{ product.warrantyInformation }}</p>
          </div>
        </div>
      </div>
      <div class="product-image">
        <img :src="product?.thumbnail" :alt="product?.title" />
      </div>
    </div>

    <div class="product-details">
      <div class="description">
        <h2>Description</h2>
        <p>{{ product.description }}</p>
      </div>

      <div class="specifications">
        <h2>Product Specifications</h2>
        <div class="spec-grid">
          <div class="spec-item">
            <span class="label">SKU</span>
            <span class="value">{{ product.sku }}</span>
          </div>
          <div class="spec-item">
            <span class="label">Category</span>
            <span class="value">{{ product.category }}</span>
          </div>
          <div class="spec-item">
            <span class="label">Stock</span>
            <span class="value">{{ product.stock }}</span>
          </div>
          <div class="spec-item">
            <span class="label">Weight</span>
            <span class="value">{{ product?.weight }}g</span>
          </div>
          <div class="spec-item dimensions">
            <span class="label">Dimensions</span>
            <span class="value">
              {{ product.dimensions?.width }}W x
              {{ product.dimensions?.height }}H x
              {{ product.dimensions?.depth }}D cm
            </span>
          </div>
        </div>
      </div>

      <div class="reviews" v-if="product.reviews?.length">
        <h2>Customer Reviews</h2>
        <div class="review-list">
          <div
            v-for="review in product.reviews"
            :key="review.date"
            class="review-item"
          >
            <div class="review-header">
              <span class="reviewer">{{ review.reviewerName }}</span>
              <div>
                <span class="date">{{
                  new Date(review.date).toLocaleDateString()
                }}</span>
                <span class="rating">
                  <span>{{ review.rating }}</span>
                  <Star size="16" />
                </span>
              </div>
            </div>
            <p class="comment">{{ review.comment }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Truck, Ribbon, Star } from "lucide-vue-next";
export default {
  name: "ProductDisplay",
  components: {
    Truck,
    Ribbon,
    Star,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
h3 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}
.product {
  padding: 1rem;
}
.product-header {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid var(--primary-color);
  padding-bottom: 1rem;
}

.product-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.brand {
  color: var(--gray-color);
  font-size: 1.1rem;
}

.price-section {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.price {
  font-size: 4rem;
  font-weight: bold;
  color: var(--primary-color);
}

.discount {
  background-color: var(--primary-color);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
}

.availability {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: bold;
  width: fit-content;
}

.availability.low\ stock {
  background-color: #fff3cd;
  color: #856404;
}

.availability.instock {
  background-color: #d4edda;
  color: #155724;
}

.availability.outofstock {
  background-color: #f8d7da;
  color: #721c24;
}
.product-image {
  display: flex;
  justify-content: center;
}
.product-image img {
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 8px;
  object-fit: cover;
  max-width: 300px;
}

.product-details {
  display: grid;
  gap: 2rem;
}

h2 {
  color: var(--primary-color);
  margin-bottom: 1rem;
}
.description p {
  color: var(--gray-color);
  max-width: 700px;
}

.specifications .spec-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.spec-item {
  display: grid;
  gap: 0.5rem;
}

.spec-item .label {
  color: var(--primary-color);
  font-size: 0.9rem;
}

.dimensions {
  grid-column: 1 / -1;
}

.shipping-warranty {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.info-box {
  padding: 1rem;
  border: 1px solid var(--secondary-color);
  border-radius: 8px;
}

.review-list {
  display: grid;
  gap: 1rem;
  margin-top: 1rem;
}

.review-item {
  padding: 1rem;
  border: 1px solid var(--secondary-color);
  border-radius: 8px;
}

.review-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.reviewer {
  font-weight: bold;
}

.date {
  color: var(--gray-color);
  font-size: 0.9rem;
}

.rating {
  margin-left: 1rem;
  display: inline-flex;
  gap: 0.3rem;
}

@media (max-width: 768px) {
  .product-header {
    grid-template-columns: 1fr;
  }

  .shipping-warranty {
    grid-template-columns: 1fr;
  }
}
</style>
