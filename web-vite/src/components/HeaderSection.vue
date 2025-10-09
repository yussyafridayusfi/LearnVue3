<template>
  <header class="header">
    <div class="container">
      <h1 class="logo">MyLanding</h1>
      <nav>
        <a href="#features">Features</a>
        <a href="#about">About</a>
        <a href="#contact" class="cta">Contact</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  background: white;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
  padding: 16px 0;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}
.logo {
  font-weight: bold;
  font-size: 1.5rem;
  color: #2563eb;
}
nav a {
  margin-left: 20px;
  text-decoration: none;
  color: #333;
  font-weight: 500;
}
.cta {
  background: #2563eb;
  color: white;
  padding: 8px 14px;
  border-radius: 8px;
}
</style>
