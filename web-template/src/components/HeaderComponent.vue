<template>
  <header class="header">
    <div class="container">
        <h1 class="logo">My Web Template</h1>
    
        <nav>
            <ul>
                <li><a href="#"> Home</a></li>
                <li><a href="#"> About</a></li>
                <li><a href="#"> Services</a></li>
                <li><a href="#"> Contact</a></li>
            </ul>
        </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  background-color: #333;
  color: white;
  padding: 1rem 0;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}
.logo {
  font-size: 1.5rem;
  font-weight: bold;
}
nav ul {
  list-style: none;
  display: flex;
}

nav ul li a {
  color: white;
  text-decoration: none;
}
nav ul li a:hover {
  text-decoration: underline;
}

</style>