<div class="column is-3 ">
    <aside class="menu is-hidden-mobile">
        <p class="menu-label">
            Общие
        </p>
        <ul class="menu-list">
            <li><a class="{{ request()->routeIs('a.i.index') ? 'is-active' : '' }}" href="{{ route('a.i.index') }}">Панель</a></li>
            <!-- <li><a>Customers</a></li>
            <li><a>Other</a></li> -->
        </ul>

        <p class="menu-label">
            Действия
        </p>
        <ul class="menu-list">
            <li><a>Payments</a></li>
            <li><a>Transfers</a></li>
            <li><a>Balance</a></li>
            <li><a>Reports</a></li>
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