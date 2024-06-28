<script setup>
import BaseSlider from './BaseSlider.vue'
</script>

<template>
  <div @wheel="handleWheel" :class="$style.banner">
    <div :class="$style.content">
      <h2 :class="$style.title">Puss in Bots: The Last Wish</h2>
      <div :class="$style.statistic"><time>2022</time><span>8.5</span></div>
      <ul :class="$style.genres">
        <li>Animation, Adventure, Comedy</li>
      </ul>
      <p :class="$style.description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis neque adipisci nisi
        explicabo ducimus quam minima rem, harum sint est!
      </p>
      <button :class="$style.watch">Watch now</button>
    </div>
    <div :class="$style.wrapperSlider">
      <BaseSlider :array="[1, 2, 3, 4, 5, 6, 7, 8]" />
    </div>
  </div>
</template>

<style module>
.banner {
  position: relative;
  background-image: url('https://static.zeffirellis.com/media/movies/_1200x630_crop_center-center_82_none/02-pib-dm-mobile-banner-1080x745-km-f01-061422-62a9f2d372f3a-1.jpg?mtime=1675090914');
  height: 500px;
  background-size: cover;
  border-radius: 30px;
  overflow: hidden;
  display: flex;
}

.banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--black);
  opacity: 0.6;
}

.content {
  position: relative;
  z-index: 1;
  padding: 20px;
  color: var(--white);
  width: 60%;
  margin: auto 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.title {
  font-weight: 600;
  font-size: 60px;
  color: var(--white2);
}
.statistic {
  display: flex;
  gap: 20px;
}
.statistic span {
  background: gray;
  padding: 2px;
  font-weight: 500;
  border-radius: 5px;
}
.statistic time {
  color: var(--white2);
  font-weight: 500;
}
.description {
  color: var(--white2);
}
.watch {
  width: max-content;
  border: none;
  padding: 10px;
  border-radius: 5px;
  background-color: #da002a;
  color: var(--white2);
  cursor: pointer;
  font-size: 18px;
}

.wrapperSlider {
  display: flex;
  align-items: end;
  overflow: hidden;
  flex: 1;
  padding-bottom: 20px;
}
</style>
