import cx from 'classnames'
import styles from './Menu.module.scss'

export const Menu = () => {
  return (
    <ul class={cx(styles.menu, 'menu')} role='menubar' id='headerMenu'>
      <li>
        <a class={cx(styles.link)} href="/">Home</a>
      </li>
      <li>
        <a class={cx(styles.link)} href="#!">About us</a>
        <ul class={cx(styles.menu)}>
          <li>
            <a class={cx(styles.link)} href="#!">Home</a>
            <ul class={cx(styles.menu)}>
              <li>
                <a class={cx(styles.link)} href="/">Home</a>
              </li>
              <li>
                <a class={cx(styles.link)} href="/pages/PageAbout/">About us</a>
              </li>
              <li>
                <a class={cx(styles.link)} href="/pages/PageWhatWeDo/">What We Do</a>
              </li>

            </ul>

          </li>
          <li>
            <a class={cx(styles.link)} href="/pages/PageAbout/">About us</a>
          </li>
          <li>
            <a class={cx(styles.link)} href="#!">What We Do</a>
            <ul class={cx(styles.menu)}>
              <li>
                <a class={cx(styles.link)} href="/">Home</a>
              </li>
              <li>
                <a class={cx(styles.link)} href="/pages/PageAbout/">About us</a>
              </li>
              <li>
                <a class={cx(styles.link)} href="/pages/PageWhatWeDo/">What We Do</a>
              </li>

            </ul>

          </li>

        </ul>

      </li>
      <li>
        <a class={cx(styles.link)} href="/pages/PageWhatWeDo/">What We Do</a>
      </li>
      <li>
        {/* <a class={cx(styles.link)} href="/pages/PageMedia/">Media</a> */}
        <a class={cx(styles.link)} href="#!">Media</a>
        <ul class={cx(styles.menu)}>
          <li>
            <a class={cx(styles.link)} href="#!">Home</a>
            <ul class={cx(styles.menu)}>
              <li>
                <a class={cx(styles.link)} href="/">Home</a>
              </li>
              <li>
                <a class={cx(styles.link)} href="/pages/PageAbout/">About us</a>
              </li>
              <li>
                <a class={cx(styles.link)} href="/pages/PageWhatWeDo/">What We Do</a>
              </li>

            </ul>

          </li>
          <li>
            <a class={cx(styles.link)} href="/pages/PageAbout/">About us</a>
          </li>
          <li>
            <a class={cx(styles.link)} href="#!">What We Do</a>
            <ul class={cx(styles.menu)}>
              <li>
                <a class={cx(styles.link)} href="/">Home</a>
              </li>
              <li>
                <a class={cx(styles.link)} href="/pages/PageAbout/">About us</a>
              </li>
              <li>
                <a class={cx(styles.link)} href="/pages/PageWhatWeDo/">What We Do</a>
              </li>

            </ul>

          </li>

        </ul>
      </li>
      <li>
        <a class={cx(styles.link)} href="/pages/PageContacts/">Contact</a>
      </li>
    </ul>
  )
}

export const toggledShowMenu = () => {
  const menu = document.querySelector('#headerMenu');
  menu.classList.toggle(`${styles.isActive}`)
}

export const MenuItemChevrone = () => {
  return (
    <span class={cx(styles.chevrone)}></span>
  )
}