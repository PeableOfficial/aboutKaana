<template>
    <div class="flex flex-col justify-center flex-auto">
        <div class="p-10 flex flex-col text-center items-center justify-center">
            <h1 class="max-w-3xl m-auto mt-0 text-4xl sm:text-6xl xl:text-7xl leading-tight font-bold tracking-wider">
                {{ $t('pages.home.title.main') }} <span
                    class="bg-gradient-to-l from-blue-500 via-green-500 to-yellow-500 bg-clip-text text-transparent">{{
                        $t('pages.home.title.sub') }}</span>.</h1>
            <p class="text-xl sm:text-2xl xl:text-3xl max-w-6xl m-auto mt-5">Empowering
                progress and
                making a
                positive impact through innovative
                technology.</p>
            <div class="p-10">
                <button class="relative btn btn-active btn-base-100 m-1 text-sm sm:text-base rounded-full">
                    Learn More
                </button>
                <button class="relative btn btn-active btn-base-100 m-1 text-sm sm:text-base rounded-full">
                    Our products
                </button>
            </div>
            <div class="relative inset-x-0 bottom-0">
                <div class="relative z-1 flex flex-wrap items-center justify-center mb-102">
                    <img src="@/assets/images/hero/kid-square.jpeg"
                        class="object-cover max-w-[20em] max-h-[20em] w-[20vw] h-[20vw] absolute left-0 bottom-0 translate-y-[20%] max-w-19 border border-solid border-base-content rounded-[26px] shadow-lg shadow-box-0-14-74-0-rgba-0-0-0-0-45"
                        alt="hero" />
                    <img src="@/assets/images/hero/hero.jpg"
                        class="object-cover max-w-[88%] border shadow-[0_14px_74px_0_rgba(0,0,0,0.45)] rounded-[26px] border-solid border-base-content"
                        alt="hero" />
                    <img src="@/assets/images/logo/square-black-withbg.png"
                        class="object-cover max-w-[20em] max-h-[20em] w-[20vw] h-[20vw] absolute bottom-15 right-0 max-w-19 border border-solid rounded-[26px] shadow-lg border-base-content"
                        alt="Kaana Logo" />
                </div>
            </div>
        </div>
    </div>
</template>