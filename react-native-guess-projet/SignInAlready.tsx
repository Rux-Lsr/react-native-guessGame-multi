import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './Startup';

export function SignInAlready(navigation: any) {
  return <View style={styles.footer}>
    <Text style={styles.footerText}>Already have an account? </Text>
    <TouchableOpacity onPress={() => { navigation.push("login"); }}>
      <Text style={styles.footerLink}>Login</Text>
    </TouchableOpacity>
  </View>;
}
