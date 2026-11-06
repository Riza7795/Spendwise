
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.logo}>SpendWise.</Text>
            <Text style={styles.subtitle}>Your money, your control.</Text>
          </View>
          <TouchableOpacity style={styles.profile}>
            <Text style={styles.profileText}>R</Text>
          </TouchableOpacity>
        </View>

        {/* Balance Card */}
        <View style={styles.balanceCard}>
          <Text style={styles.cardLabel}>Total Balance</Text>
          <Text style={styles.balance}>₹25,450.00</Text>

          <View style={styles.balanceDetails}>
            <View>
              <Text style={styles.detailLabel}>↑ Income</Text>
              <Text style={styles.detailAmount}>₹35,000</Text>
            </View>
            <View>
              <Text style={styles.detailLabel}>↓ Expenses</Text>
              <Text style={styles.detailAmount}>₹9,550</Text>
            </View>
          </View>
        </View>

        {/* Quick Actions */}
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionIcon}>＋</Text>
            <Text style={styles.actionText}>Add Expense</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionIcon}>↗</Text>
            <Text style={styles.actionText}>Add Income</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionIcon}>◎</Text>
            <Text style={styles.actionText}>Set Budget</Text>
          </TouchableOpacity>
        </View>

        {/* Budget */}
        <Text style={styles.sectionTitle}>Monthly Budget</Text>
        <View style={styles.whiteCard}>
          <View style={styles.row}>
            <Text style={styles.cardHeading}>November Budget</Text>
            <Text style={styles.percentage}>64%</Text>
          </View>

          <View style={styles.progressBackground}>
            <View style={styles.progressFill} />
          </View>

          <View style={styles.row}>
            <Text style={styles.muted}>₹12,800 spent</Text>
            <Text style={styles.muted}>₹20,000 limit</Text>
          </View>
        </View>

        {/* Recent Transactions */}
        <View style={styles.row}>
          <Text style={styles.sectionTitle}>Recent Transactions</Text>
          <Text style={styles.viewAll}>View all</Text>
        </View>

        <View style={styles.whiteCard}>
          <Transaction
            icon="🍔"
            title="Food & Dining"
            date="Today"
            amount="- ₹450"
          />
          <Transaction
            icon="🚌"
            title="Transportation"
            date="Yesterday"
            amount="- ₹120"
          />
          <Transaction
            icon="💰"
            title="Salary"
            date="1 November"
            amount="+ ₹35,000"
            income
          />
        </View>

        {/* Bottom message */}
        <Text style={styles.footer}>
          Spend smarter. Save better.
        </Text>
      </ScrollView>
    </View>
  );
}

function Transaction({
  icon,
  title,
  date,
  amount,
  income = false,
}: {
  icon: string;
  title: string;
  date: string;
  amount: string;
  income?: boolean;
}) {
  return (
    <View style={styles.transaction}>
      <Text style={styles.transactionIcon}>{icon}</Text>
      <View style={styles.transactionInfo}>
        <Text style={styles.transactionTitle}>{title}</Text>
        <Text style={styles.muted}>{date}</Text>
      </View>
      <Text style={[styles.amount, income && styles.income]}>
        {amount}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    paddingTop: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 22,
    paddingVertical: 20,
  },
  logo: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#172554',
  },
  subtitle: {
    color: '#64748B',
    marginTop: 4,
  },
  profile: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#DBEAFE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileText: {
    color: '#1D4ED8',
    fontSize: 20,
    fontWeight: 'bold',
  },
  balanceCard: {
    backgroundColor: '#172554',
    marginHorizontal: 20,
    borderRadius: 22,
    padding: 22,
    marginBottom: 25,
  },
  cardLabel: {
    color: '#CBD5E1',
    fontSize: 14,
  },
  balance: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 25,
  },
  balanceDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailLabel: {
    color: '#CBD5E1',
    fontSize: 13,
  },
  detailAmount: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
    marginTop: 7,
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#172554',
    marginHorizontal: 22,
    marginBottom: 14,
    marginTop: 8,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 24,
  },
  actionButton: {
    backgroundColor: '#FFFFFF',
    width: '31%',
    paddingVertical: 16,
    borderRadius: 15,
    alignItems: 'center',
  },
  actionIcon: {
    fontSize: 25,
    color: '#2563EB',
  },
  actionText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#334155',
    marginTop: 8,
  },
  whiteCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 17,
    padding: 17,
    marginBottom: 22,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardHeading: {
    color: '#334155',
    fontWeight: '600',
    fontSize: 15,
  },
  percentage: {
    color: '#2563EB',
    fontWeight: 'bold',
  },
  progressBackground: {
    height: 9,
    backgroundColor: '#E2E8F0',
    borderRadius: 10,
    marginVertical: 16,
  },
  progressFill: {
    width: '64%',
    height: 9,
    backgroundColor: '#2563EB',
    borderRadius: 10,
  },
  muted: {
    color: '#94A3B8',
    fontSize: 12,
  },
  viewAll: {
    color: '#2563EB',
    marginRight: 22,
    marginBottom: 14,
    fontWeight: '600',
  },
  transaction: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  transactionIcon: {
    fontSize: 23,
    marginRight: 13,
  },
  transactionInfo: {
    flex: 1,
  },
  transactionTitle: {
    color: '#334155',
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 5,
  },
  amount: {
    color: '#DC2626',
    fontWeight: 'bold',
    fontSize: 13,
  },
  income: {
    color: '#16A34A',
  },
  footer: {
    textAlign: 'center',
    color: '#94A3B8',
    marginTop: 5,
    marginBottom: 30,
  },
});
