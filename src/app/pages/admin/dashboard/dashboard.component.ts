import { Component } from '@angular/core';
import { TitleHeaderComponent } from '../../../components/common-components/title-header.component';
import { StatCardComponent } from '../../../components/common-components/stat-card.component';
import { CommonTableComponent } from '../../../components/common-components/common-table.component';
import { CommonChartComponent } from '../../../components/common-components/common-chart.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TitleHeaderComponent, StatCardComponent, CommonTableComponent, CommonChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  columns = [
    {label: 'Name', key: 'name'},
    {label: 'Join Date', key: 'joinDate'},
    {label: 'Mobile No', key: 'mobile'},
    {label: 'Commission', key: 'commission'},
    {label: 'Status', key: 'status'},
    {label: 'Providers', key: 'providers'},
    {label: 'Consumers', key: 'consumers'}
  ];
  data = [
    {
      name: 'Agency 01',
      subtext: 'Softsahil',
      joinDate: '10 March, 2023',
      mobile: '90 000 00000',
      commission: '10%',
      status: 'Active',
      providers: 85,
      consumers: 64
    },
    {
      name: 'Agency 02',
      subtext: 'Phenix',
      joinDate: '10 March, 2023',
      mobile: '80 000 00000',
      commission: '15%',
      status: 'Active',
      providers: 10,
      consumers: 41
    }
  ];
  actions = [
    {icon: 'edit', label: 'Edit', onClick: (row: any) => {}},
    {icon: 'delete', label: 'Delete', onClick: (row: any) => {}}
  ];

  chartData = {
    labels: ['1k', '5k', '10k', '15k', '20k', '25k', '30k', '35k', '40k', '45k', '50k', '55k', '60k'],
    datasets: [
      {
        data: [20, 30, 40, 60, 80, 100, 80, 60, 70, 90, 80, 70, 80],
        label: 'Payments',
        fill: true,
        tension: 0.4,
        borderColor: '#1952B3',
        backgroundColor: 'rgba(25,82,179,0.1)',
        pointBackgroundColor: '#1952B3',
        pointBorderColor: '#1952B3'
      }
    ]
  };
  chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { color: '#e5e7eb' } }
    }
  };
} 