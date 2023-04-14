import Link from "next/link";

function Nav() {
  return (
    <nav>
      <div className="navbar bg-base-100 mt-8">
        <ul>
          <li>
            <Link className="btn btn-ghost normal-case text-xl" href="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link
              className="btn btn-ghost normal-case text-xl"
              href="/dev-projects"
            >
              Dev Projects
            </Link>
          </li>
          <li>
            <Link className="btn btn-ghost normal-case text-xl" href="/art">
              Art
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
