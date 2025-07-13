import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { theme } from '../constants/theme';
import { hp } from '../helpers/common';
import Loading from './Loading';
import { Platform } from 'react-native';  // Must be exactly this import

const Button = ({
  buttonStyle,
  textStyle,
  title = '',
  onPress = () => {},
  loading = false,
  hasShadow = true,
}) => {
  // const shadowStyle = {
  //   shadowColor: theme.colors.dark,
  //   shadowOffset: { width: 0, height: 10 },
  //   shadowOpacity: 0.2,
  //   shadowRadius: 8,
  //   elevation: 4,
  // };
  const shadowStyle = Platform.select({
    ios: {
      boxShadow: `0 10px 8px rgba(${parseInt(theme.colors.dark.slice(1, 3), 16)}, ${parseInt(theme.colors.dark.slice(3, 5), 16)}, ${parseInt(theme.colors.dark.slice(5, 7), 16)}, 0.2)`,
    },
    android: {
      elevation: 4,
    },
    default: { // For web and other platforms
      boxShadow: `0 10px 8px rgba(${parseInt(theme.colors.dark.slice(1, 3), 16)}, ${parseInt(theme.colors.dark.slice(3, 5), 16)}, ${parseInt(theme.colors.dark.slice(5, 7), 16)}, 0.2)`,
    }
  });
  if (loading) {
    return (
      <View style={[styles.button, buttonStyle, { backgroundColor: 'white' }]}>
        {/* Uncomment the following if ActivityIndicator is used */}
        {/* <ActivityIndicator size="small" color={theme.colors.white} /> */}
        <Loading/>
      </View>
    );
  }

  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, buttonStyle, hasShadow && shadowStyle]}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    height: hp(6.6), // Assuming `hp` is a valid helper
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.radius.xl, // Assuming this is valid in your theme
  },
  text: {
    color: theme.colors.white, // Fix: Use a color from your theme or replace it with '#FFFFFF'
    fontSize: hp(2.5),
    fontWeight: theme.fonts.bold,
  },
});
