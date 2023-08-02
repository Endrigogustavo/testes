<x-guest-layout>
    <!-- Session Status -->
    <x-auth-session-status class="mb-4" :status="session('status')" />

    <div id="navbar" class="center">
    <img class="logo_principal" id="logo" src="{{ asset('images/img_logo.png') }}" alt="img_logo">
      <div class="icone-container">
        <div class="button-container">
        <i href="#default" id="iconeCoração" class="icone fa-regular fa-heart" ></i>
        <i href="#default" id="iconeUsuário" class="icone fa-solid fa-user" ></i>
    </div>
  </div>  
      <div id="navbar-bottom">
    <div class="linha"></div>
    <a href="#produtos">TODOS OS PRODUTOS</a>
    <a href="#executivos">EXECUTIVOS</a>
    <a href="#esportivos">ESPORTIVOS</a>
    <a href="#comemoracoes">COMEMORAÇÕES</a>
    <a href="#diaadia">DIA A DIA</a>
    <a href="#modapraia">MODA PRAIA</a>
    <div class="topnav">
      <div class="search-container">
        <form action="/action_page.php">
          <input type="text" placeholder="Procurar" name="search">
          <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
        </form>
      </div>
    </div>
  </div>
  </div>

  <div class="container">
  <form method="POST" action="{{ route('login') }}">
        @csrf

        <!-- Email Address -->
        <div>
            <x-input-label for="email" :value="__('Email')" />
            <x-text-input id="email" class="block mt-1 w-full" type="email" name="email" :value="old('email')" required autofocus autocomplete="username" />
            <x-input-error :messages="$errors->get('email')" class="mt-2" />
        </div>

        <!-- Password -->
        <div class="mt-4">
            <x-input-label for="password" :value="__('Password')" />

            <x-text-input id="password" class="block mt-1 w-full"
                            type="password"
                            name="password"
                            required autocomplete="current-password" />

            <x-input-error :messages="$errors->get('password')" class="mt-2" />
        </div>

        <!-- Remember Me -->
        <div class="block mt-4">
            <label for="remember_me" class="inline-flex items-center">
                <input id="remember_me" type="checkbox" class="rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800" name="remember">
                <span class="ml-2 text-sm text-gray-600 dark:text-gray-400">{{ __('Remember me') }}</span>
            </label>
        </div>

        <div class="flex items-center justify-end mt-4">
            @if (Route::has('password.request'))
                <a class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800" href="{{ route('password.request') }}">
                    {{ __('Forgot your password?') }}
                </a>
            @endif

            <x-primary-button class="ml-3">
                {{ __('Log in') }}
            </x-primary-button>
        </div>
    </form>

  </div>

    <!-- Footer -->
<footer>
  <div class="linha-footer"></div>
  <div class="container-footer">
    <div>
      <h2 class="desc-footer1" href="Menu - versão 1.html#titulo-sn">Conheça nossa história</h2>
    </div>

    <div>
      <h2 class="desc-footer2">Todos os direitos reservados</h2>
    </div>

    <div>
      <img class="logo_branca" id="logo_branca" src="associate/img/logo_branca.png" alt="logo_branca" href="Menu - versão 1.html">
    </div>

    <div>
      <h2 class="desc-footer3">CONTATOS: <a class="link" href="mailto:veste_me@hotmail.com">veste_me@hotmail.com</a></h2>
    </div>

    <div>
      <h2 class="desc-footer4"><a class="link" href="https://www.instagram.com/">@veste-me</a></h2>
    </div>

  </div>
  <div class="linha-footer"></div>
</footer>

<p class="titulo-footer">Veste-me | São Paulo - SP</p>
<p class="titulo-footer">Davi Rodrigues Costa Souza | Gabriela Souza Correia | Isabela Souza Correia</p>

</div>

</x-guest-layout>
