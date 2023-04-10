declare module 'react-native-swipe-gestures' {
  import { Component } from 'react';
  import {
    PanResponderGestureState,
    ViewProps
  } from 'react-native';

  export interface GestureRecognizerProps extends ViewProps {
    config?: GestureRecognizerConfig;
    onSwipe?(gestureName: string, gestureState: PanResponderGestureState): void;
    onSwipeUp?(gestureState: PanResponderGestureState): void;
    onSwipeDown?(gestureState: PanResponderGestureState): void;
    onSwipeLeft?(gestureState: PanResponderGestureState): void;
    onSwipeRight?(gestureState: PanResponderGestureState): void;
  }

  interface GestureRecognizerConfig {
    /**
     * Velocity that has to be breached in order for swipe to be triggered (vx and vy properties of gestureState)
     * @default 0.3
     */
    velocityThreshold?: number;

    /**
     * Absolute offset that shouldn't be breached for swipe to be triggered (dy for horizontal swipe, dx for vertical swipe)
     * @default 80
     */
    directionalOffsetThreshold?: number;

    /**
     * Indicates whether up swipe should be detected
     * @default true
     */
    detectSwipeUp?: boolean;

    /**
     * Indicates whether down swipe should be detected
     * @default true
     */
    detectSwipeDown?: boolean;

    /**
     * Indicates whether left swipe should be detected
     * @default true
     */
    detectSwipeLeft?: boolean;

    /**
     * Indicates whether right swipe should be detected
     * @default true
     */
    detectSwipeRight?: boolean;
  }

  class GestureRecognizer extends Component<GestureRecognizerProps> {}

  export default GestureRecognizer;
}
