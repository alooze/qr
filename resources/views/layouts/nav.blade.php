<!-- START NAV -->
    <nav class="navbar is-white">
        <div class="container">
            <div class="navbar-brand">
                <a class="navbar-item brand-text" href="{{ route('a.i.index') }}">
                {{ config('app.name', 'Moldovacenter.store') }}
                </a>
                <div class="navbar-burger burger" data-target="navMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div id="navMenu" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item" href="{{ route('a.i.index') }}">
                        Панель
                    </a>

                    @hasanyrole('Root|Admin')
                    <a class="navbar-item" href="{{ route('a.u.index') }}">
                        Пользователи
                    </a>
                    <a class="navbar-item" href="{{ route('a.r.index') }}">
                        Роли
                    </a>
                    @endhasanyrole

                    @hasanyrole('Root|Admin|Writer')
                    <a class="navbar-item" href="{{ route('a.w.form') }}">
                        Загрузить
                    </a>
                    @endhasanyrole

                    @hasanyrole('Root|Admin|Reader|Writer')
                    <a class="navbar-item" href="{{ route('a.i.people') }}">
                        Записи
                    </a>
                    @endhasanyrole



                </div>
            </div>

            <div class="navbar-end">
                <div class="navbar-item has-dropdown is-hoverable">
                    @auth
                        <a class="navbar-link">
                        Профиль
                        </a>

                        <div class="navbar-dropdown">
                            <a class="navbar-item" href="{{ route('a.p.index') }}">
                            Профиль
                            </a>

                            <hr class="navbar-divider">
                            <a class="navbar-item" href="javascript:;" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                            Выход
                            </a>
                            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                @csrf
                            </form>
                        </div>
                    @else
                        <a href="{{ route('login') }}" class="navbar-item">
                        Войти
                        </a>

                        @if (Route::has('register'))
                        <a href="{{ route('register') }}" class="navbar-item">Register</a>
                        @endif
                    @endauth
                    
                    
                </div>
            </div>

        </div>
    </nav>
    <!-- END NAV -->