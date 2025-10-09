<template>
  <section class="hero">
    <div class="container">
      <div class="hero-text">
        <h2>Build Modern Landing Pages Effortlessly</h2>
        <p>Powered by Vue 3 + Vite for lightning-fast performance and great developer experience.</p>
        <div class="buttons">
          <a href="#" class="btn primary">Get Started</a>
          <a href="#" class="btn secondary">Learn More</a>
        </div>
      </div>
      <div class="hero-image">
        <div class="mock"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 80px 0;
  background: linear-gradient(to bottom right, #e0f2fe, #fff);
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
  flex-wrap: wrap;
}
.hero-text {
  flex: 1;
  min-width: 300px;
  text-align: left;
}
.hero-text h2 {
  font-size: 2.4rem;
  margin-bottom: 10px;
  color: #1e3a8a;
}
.hero-text p {
  color: #555;
  margin-bottom: 24px;
}
.buttons {
  display: flex;
  gap: 12px;
}
.btn {
  text-decoration: none;
  padding: 10px 18px;
  border-radius: 8px;
  font-weight: 500;
}
.primary {
  background: #2563eb;
  color: white;
}
.secondary {
  background: white;
  border: 1px solid #2563eb;
  color: #2563eb;
}
.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
.mock {
  width: 320px;
  height: 200px;
  background: linear-gradient(135deg, #93c5fd, #60a5fa);
  border-radius: 12px;
}
</style>
