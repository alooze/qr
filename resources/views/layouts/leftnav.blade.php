<div class="column is-3 ">
    <aside class="menu is-hidden-mobile">
        <p class="menu-label">
            Общие
        </p>
        <ul class="menu-list">
            <li><a class="{{ request()->routeIs('a.i.index') ? 'is-active' : '' }}" href="{{ route('a.i.index') }}">Панель</a></li>
            <li><a class="{{ request()->routeIs('a.p.index') ? 'is-active' : '' }}" href="{{ route('a.p.index') }}">Профиль</a></li>
        </ul>

        <p class="menu-label">
            Действия
        </p>
        <ul class="menu-list">
            @hasanyrole('Root|Admin|Writer')
            <li><a class="navbar-item {{ request()->routeIs('a.w.form') ? 'is-active' : '' }}" href="{{ route('a.w.form') }}">
                Загрузить
            </a></li>
            @endhasanyrole

            @hasanyrole('Root|Admin|Reader|Writer')
            <li><a class="navbar-item {{ request()->routeIs('a.i.people') ? 'is-active' : '' }}" href="{{ route('a.i.people') }}">
                Записи
            </a>
            @endhasanyrole
        </ul>

        @hasanyrole('Root|Admin')
        <p class="menu-label">
            Администрирование
        </p>
        <ul class="menu-list">
            <!-- <li><a>Team Settings</a></li> -->
            <li>
                <a class="{{ request()->routeIs('a.u.index') ? 'is-active' : '' }}" href="{{ route('a.u.index') }}">
                    Пользователи
                </a>
                <!-- <ul>
                    <li><a>Members</a></li>
                    <li><a>Plugins</a></li>
                    <li><a>Add a member</a></li>
                    <li><a>Remove a member</a></li>
                </ul> -->
            </li>
            <li>
                <a class="{{ request()->routeIs('a.r.index') ? 'is-active' : '' }}" href="{{ route('a.r.index') }}">
                    Роли
                </a>
            </li>
            <!-- <li><a>Cloud Storage Environment Settings</a></li>
            <li><a>Authentication</a></li>
            <li><a>Payments</a></li> -->
        </ul>
        @endhasanyrole
    </aside>
</div>