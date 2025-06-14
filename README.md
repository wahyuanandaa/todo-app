# Frontend Mentor - Todo App Solution

Ini adalah solusi untuk [Todo app challenge di Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges membantu meningkatkan keterampilan coding dengan membangun proyek yang realistis.

## Daftar Isi

- [Overview](#overview)
  - [Challenge](#challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Proses Pengembangan](#proses-pengembangan)
  - [Teknologi yang Digunakan](#teknologi-yang-digunakan)
  - [Hal yang Dipelajari](#hal-yang-dipelajari)
  - [Pengembangan Selanjutnya](#pengembangan-selanjutnya)
  - [Sumber Daya yang Berguna](#sumber-daya-yang-berguna)
- [Author](#author)

## Overview

### Challenge

Pengguna dapat:

- Melihat layout optimal untuk aplikasi sesuai ukuran layar perangkat
- Melihat hover states untuk semua elemen interaktif
- Menambahkan todo baru ke daftar
- Menandai todo sebagai selesai
- Menghapus todo dari daftar
- Memfilter todo berdasarkan all/active/complete
- Menghapus semua todo yang selesai
- Mengubah mode terang dan gelap
- Drag and drop untuk mengurutkan item dalam daftar

### Screenshot

![Todo App Screenshot](./design/desktop-preview.jpg)

### Links

- Solution URL: [GitHub Repository](https://github.com/wahyuanandaa/todo-app)
- Live Site URL: [Demo Site](https://wahyuanandaa.github.io/todo-app/)

## Proses Pengembangan

### Teknologi yang Digunakan

- [React](https://reactjs.org/) - JavaScript library
- [Vite](https://vitejs.dev/) - Build tool
- CSS custom properties (variables)
- Flexbox & CSS Grid
- Mobile-first workflow
- ESLint untuk code quality
- SASS untuk styling

### Hal yang Dipelajari

Selama mengerjakan proyek ini, saya mempelajari beberapa hal penting:

1. **React Hooks dan State Management**

```jsx
const [todos, setTodos] = useState([])
const [filter, setFilter] = useState("all")
const [theme, setTheme] = useState("light")
```

2. **Accessibility Best Practices**

```css
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--active-color);
  color: var(--card-bg);
  padding: 8px;
  z-index: 100;
}
```

3. **Responsive Design dengan CSS Variables**

```css
:root[data-theme="theme-dark"] {
  --bg-color: hsl(235, 21%, 11%);
  --card-bg: hsl(235, 24%, 19%);
  --text-color: hsl(0, 0%, 85%);
}
```

4. **Drag and Drop Implementation**

```jsx
const reorderTodos = (draggedId, targetId) => {
  setTodos((prev) => {
    const draggedIndex = prev.findIndex((todo) => todo.id === draggedId)
    const targetIndex = prev.findIndex((todo) => todo.id === targetId)
    const newTodos = [...prev]
    const [draggedTodo] = newTodos.splice(draggedIndex, 1)
    newTodos.splice(targetIndex, 0, draggedTodo)
    return newTodos
  })
}
```

### Pengembangan Selanjutnya

Beberapa area yang ingin saya kembangkan lebih lanjut:

1. Implementasi state management yang lebih robust (Redux/Context API)
2. Menambahkan unit testing dengan Jest dan React Testing Library
3. Mengoptimalkan performa dengan code splitting dan lazy loading
4. Menambahkan fitur offline support dengan Service Workers
5. Implementasi animasi yang lebih halus dengan Framer Motion
6. Menambahkan fitur pencarian todo
7. Implementasi local storage untuk menyimpan todos

### Sumber Daya yang Berguna

- [MDN Web Docs](https://developer.mozilla.org/) - Referensi lengkap untuk HTML, CSS, dan JavaScript
- [React Documentation](https://reactjs.org/docs/getting-started.html) - Dokumentasi resmi React
- [WCAG Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) - Panduan accessibility
- [Vite Documentation](https://vitejs.dev/guide/) - Dokumentasi Vite
- [CSS-Tricks](https://css-tricks.com/) - Artikel dan tutorial CSS yang sangat membantu

## Author

- Frontend Mentor - [@Wahyuanandaa](https://www.frontendmentor.io/profile/Wahyuanandaa)
- GitHub - [@wahyuanandaa](https://github.com/wahyuanandaa)
