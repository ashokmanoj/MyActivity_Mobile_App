import { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

interface SyncFooterProps {
  onSync?: () => void;
}

export default function SyncFooter({ onSync }: SyncFooterProps) {
  const [lastSynced, setLastSynced] = useState(getCurrentDateTime());
  const [isSyncing, setIsSyncing] = useState(false);

  const rotateAnim = useRef(new Animated.Value(0)).current;

  function getCurrentDateTime() {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    };
    return now.toLocaleString('en-GB', options).replace(',', '');
  }

  const handleSync = () => {
    if (isSyncing) return;

    setIsSyncing(true);

    rotateAnim.setValue(0);

    // 🔄 Rotate for 5 seconds
    Animated.timing(rotateAnim, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      // After 5 sec
      setLastSynced(getCurrentDateTime());
      setIsSyncing(false);
      rotateAnim.setValue(0);

      if (onSync) {
        onSync();
      }
    });
  };

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '1080deg'], // 3 full rotations
  });

  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.syncButton}
        onPress={handleSync}
        activeOpacity={0.8}
        disabled={isSyncing}
      >
        <Animated.View style={{ transform: [{ rotate }] }}>
          <Ionicons name="sync" size={20} color={colors.white} />
        </Animated.View>
        <Text style={styles.syncText}>
          {isSyncing ? 'SYNCING...' : 'SYNC'}
        </Text>
      </TouchableOpacity>

      <View style={styles.statusContainer}>
        <Text style={styles.statusText}>
          Last synced on {lastSynced}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 5,
    backgroundColor: colors.primaryDark,
    marginTop: 34,
  },
  syncButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#32109A',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 14,
  },
  syncText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 8,
    letterSpacing: 0.5,
  },
  statusContainer: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 14,
    paddingHorizontal: 9,
    borderRadius: 10,
    borderColor: '#A07CFF',
    borderWidth: 1,
  },
  statusText: {
    color: '#B2A2D0',
    fontSize: 13,
  },
});