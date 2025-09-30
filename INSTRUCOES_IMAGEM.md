# Instruções para Adicionar Imagem Local

## Como substituir a imagem de fundo da Hero Section

### 1. Salvar a imagem
- Salve a imagem de café que você quer usar na pasta `public/`
- Nome sugerido: `hero-coffee-bg.jpg` ou `hero-coffee-bg.png`

### 2. Atualizar o CSS
No arquivo `src/css/HeroSection.css`, linha 11, substitua:

```css
url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')
```

Por:

```css
url('/hero-coffee-bg.jpg')
```

### 3. Otimizações recomendadas
- **Tamanho**: Use uma imagem de pelo menos 1920x1080px
- **Formato**: JPG para fotos, PNG para imagens com transparência
- **Compressão**: Otimize a imagem para web (máximo 500KB)
- **Responsividade**: A imagem será redimensionada automaticamente

### 4. Efeitos aplicados
- ✅ Overlay escuro (40% de opacidade) para melhor legibilidade
- ✅ Background-attachment: fixed (efeito parallax no desktop)
- ✅ Background-size: cover (cobre toda a área)
- ✅ Background-position: center (centralizada)
- ✅ Text-shadow nos textos para melhor contraste
- ✅ Botão com borda branca e sombra para destaque

### 5. Cores ajustadas
- Título: Branco com sombra escura
- Parágrafo: Cor creme (#f5f1eb) com sombra
- Botão: Mantém as cores originais com borda branca

A imagem agora está perfeitamente integrada com overlay e todos os elementos de texto têm excelente legibilidade!
