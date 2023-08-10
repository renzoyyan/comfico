'use client';

import React, { MutableRefObject } from 'react';
import { useKeenSlider, KeenSliderPlugin, KeenSliderInstance } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { Product } from '../types';
import Image from 'next/image';

function ThumbnailPlugin(mainRef: MutableRefObject<KeenSliderInstance | null>): KeenSliderPlugin {
  return slider => {
    function removeActive() {
      slider.slides.forEach(slide => {
        slide.classList.remove('active');
      });
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add('active');
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener('click', () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on('created', () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on('animationStarted', main => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

type Props = {
  product: Product;
};
export const ProductSlider = ({ product }: Props) => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
  });
  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <div>
      <div ref={sliderRef} className="keen-slider">
        {product.images.map(image => (
          <div className="keen-slider__slide" key={image.id}>
            <div className="relative aspect-square w-full">
              <Image
                src={image.url}
                alt={product.name}
                fill
                className="h-auto w-auto rounded-lg object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      <div ref={thumbnailRef} className="keen-slider thumbnail">
        {product.images.map(image => (
          <div className="keen-slider__slide" key={image.id}>
            <div className="relative aspect-square w-full">
              <Image src={image.url} alt={product.name} fill className="h-auto w-auto rounded-lg" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
