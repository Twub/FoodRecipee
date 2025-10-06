<script>

</script>

<template>
    <nav class="navbar navbar-expand-lg bg-success" data-bs-theme="dark">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarColor01">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <RouterLink to="/" class="hover-underline nav-link active">Hem</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/recipes" class="hover-underline nav-link active">Recept</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/myPage" class="hover-underline nav-link active">Mina sidor</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/loginPage" class="hover-underline nav-link active">Logga in</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/about" class="hover-underline nav-link active">Om</RouterLink>
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-sm-2" type="search" placeholder="Sök recept" spellcheck="false" data-ms-editor="true">
                    <button class="btn btn-secondary my-2 my-sm-0 hover-underline" type="submit">Sök</button>
                </form>
            </div>
        </div>
    </nav>
</template>

<style>
.hover-underline {
  font-size: 1.3rem;
  color: #ffffff;
  position: relative;
  display: inline-block;
  text-decoration: none;
}

.hover-underline::after,
.hover-underline::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, #408080, #00ffff);
  bottom: -5px;
  left: 0;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s ease-out;
}

.hover-underline::before {
  top: -5px;
  transform-origin: left;
}

.hover-underline:hover::after,
.hover-underline:hover::before {
  transform: scaleX(1);
}
</style>